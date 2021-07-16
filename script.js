chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: contentScriptFunc
  });
});


function contentScriptFunc() {

	var textBoxes = [];
  var x = document.getElementsByTagName("input");
	
	for (var i = 0; i < x.length; i++) {
		// 1st->2nd->3rd
		var y = document.getElementsByTagName("input").item(i);
		textBoxes.push(y);
	}
		
	textBoxes[0].focus();
		
	// Remove from beginnig of array
	var x = textBoxes.shift();
		
	// Add this to the end
	textBoxes.push(x); 
}
