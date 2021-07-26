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
        var recreatedHTMLElementfromName = document.querySelector(`[name=${createdList[j]}]`);
		var recreatedHTMLElementfromId = document.querySelector(`#${createdList[j]}`);
        
		if (recreatedHTMLElementfromId !== null) {
			finalList.push(recreatedHTMLElementfromId);
			console.log(finalList[j]);
		}

		else if (recreatedHTMLElementfromName !== null) {
			finalList.push(recreatedHTMLElementfromName);
			console.log(finalList[j]);
		}
		
	}

	finalList[0].focus();
	var z = createdList.shift(); // remove and return first element
	
	createdList.push(z); // add this element to the end
	
	localStorage.setItem('list', JSON.stringify(createdList));

}