
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: contentScriptFunc
  });
});



function contentScriptFunc() {
	var textBoxes = [];
  var inputTags = document.getElementsByTagName("input");
  
	for (var j = 0; j < inputTags.length; j++) {
		if (inputTags[j].getAttribute("type") === "text") {
			var y = inputTags.item(j);
			textBoxes.push(y);
		}
	}	
		
	textBoxes[0].focus();
		
	// Remove from beginnig of array
	var z = textBoxes.shift();
		
	// Add this to the end
	textBoxes.push(z);
	
   
}
