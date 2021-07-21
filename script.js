// This code: Chrome dev site, https://github.com/shahednasser/chrome-commands-tutorial/blob/master/MV3/background.js
// Helpful Manifest in the repo as well

window.onload = function() {
	var textBoxes = [];
	// https://stackoverflow.com/questions/16000055/select-all-textboxes-in-a-document-using-javascript
	var inputTags = document.getElementsByTagName("input");
	
	for (var j = 0; j < inputTags.length; j++) {
		if (inputTags[j].getAttribute("type") === "text"
		|| inputTags[j].getAttribute("type") === "password") {

			var y = inputTags.item(j).getAttribute("name");
			if (y !== null) {
				textBoxes.push(y);
			}
			
		}
		// chrome.storage.local.set({'list': textBoxes}, function() {
		// 	console.log("vali: " + textBoxes);
		// });
		localStorage.setItem('list', JSON.stringify(textBoxes) );
		
	}	
	// var ans = sessionStorage.getItem('list');
	// console.log(JSON.parse(ans));    
}