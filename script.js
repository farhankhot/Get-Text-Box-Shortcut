// This code: Chrome dev site, https://github.com/shahednasser/chrome-commands-tutorial/blob/master/MV3/background.js
// Helpful Manifest in the repo as well


// On page load 3 options:
// 1. Text box is a button (cant do anything)
// 2. TB has name and id (use id)
// 3. TB has name but no id (use name)
// 4. TB has no name but id (use id)
// 5. TB has no name, no id but class (?)
// 6. TB has no name, no id, no class (cant do anything)

// Does not work on:


window.onload = function() {

	var textBoxes = [];
	// https://stackoverflow.com/questions/16000055/select-all-textboxes-in-a-document-using-javascript
	var inputTags = document.getElementsByTagName("input");
	
	for (var j = 0; j < inputTags.length; j++) {
		if ( (inputTags[j].getAttribute("type") === "text"
		|| inputTags[j].getAttribute("type") === "password" || inputTags[j].getAttribute("type") === "search") && window.getComputedStyle(inputTags[j]).display !== "none" ) {

			// var nameAttrOfItem = inputTags.item(j).getAttribute("name");
			// var idAttrOfItem = inputTags.item(j).getAttribute("id");
            console.log(inputTags);

            if (inputTags.item(j).hasAttribute("id") === true) {
                textBoxes.push(inputTags.item(j).getAttribute("id"));
            }
			
            else if ( inputTags.item(j).hasAttribute("name") === true ) {
                textBoxes.push(inputTags.item(j).getAttribute("name"));
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