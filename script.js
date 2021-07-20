// This code: Chrome dev site, https://github.com/shahednasser/chrome-commands-tutorial/blob/master/MV3/background.js
// Helpful Manifest in the repo as well

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: getFirstInQueue
  });
	
});

function getFirstInQueue() {

	
	var data = localStorage.getItem('list');
	
	// JSON.parse: https://www.w3schools.com/js/js_json_parse.asp
	var jsonifiedData = JSON.parse(data);
	console.log(jsonifiedData);


	createdList=[];
	for (var i in jsonifiedData) {
		createdList.push(jsonifiedData[i] );
		console.log("createdList: " + createdList[i]);
	}

	finalList=[];
	// Get list of HTML elements from createdList
	// We have name attribute in createdList
	for (var j in createdList) {

	// Template literals: https://stackoverflow.com/questions/3304014/how-to-interpolate-variables-in-strings-in-javascript-without-concatenation
		
		var recreatedHTMLElement = document.querySelector(`[name=${createdList[j]}]`);
		// console.log(recreatedHTMLElement);
		finalList.push(recreatedHTMLElement);
		console.log(finalList[j]);
	}

	finalList[0].focus();
	var z = createdList.shift(); // remove and return first element
	
	createdList.push(z); // add this element to the end
	
	localStorage.setItem('list', JSON.stringify(createdList));

}

function contentScriptFunc() {
	var textBoxes = [];

	// https://stackoverflow.com/questions/16000055/select-all-textboxes-in-a-document-using-javascript
	var inputTags = document.getElementsByTagName("input");
	
	for (var j = 0; j < inputTags.length; j++) {
		if (inputTags[j].getAttribute("type") === "text"
		|| inputTags[j].getAttribute("type") === "password") {

			var y = inputTags.item(j).getAttribute("name");
			textBoxes.push(y);
			
		}
		// chrome.storage.local.set({'list': textBoxes}, function() {
		// 	console.log("vali: " + textBoxes);
		// });
		localStorage.setItem('list', JSON.stringify(textBoxes) );
		
	}	
	// var ans = sessionStorage.getItem('list');
	// console.log(JSON.parse(ans));    
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab){
	if (changeInfo.status === 'complete'
	&& tab.active){

		var textBoxes = [];

		var inputTags = document.getElementsByTagName("input");
		
		for (var j = 0; j < inputTags.length; j++) {
			
			if (inputTags[j].getAttribute("type") === "text"
			|| inputTags[j].getAttribute("type") === "password") {

				var y = inputTags.item(j).getAttribute("name");
				textBoxes.push(y);
			}
			localStorage.setItem('list',JSON.stringify(textBoxes));
			
		}	
		
	}
});
