// text box array (This is a queue)
var textBoxes = [];	

// NEED to be expanded to get all types of text boxes.
function getTextBoxesInPage() {
	
	var x = document.getElementsByTagName("input");
	
	for (var i = 0; i < x.length; i++) {
		// 1st->2nd->3rd
		var y = document.getElementsByTagName("input").item(i);
		textBoxes.push(y);
	}

	// for (var j=0; j < textBoxes.length; j++) {
	// 	textBoxes[j].item(j).focus();
	// }
		
}

function pressShortcutKey(e) {
	
	var e = e || window.event;
	
	// After pressing shortcut key, highlight the first textbox in the queue
	if (e.ctrlKey && e.which == 32) {
		
		textBoxes[0].focus();
		
		// Remove from beginnig of array
		var x = textBoxes.shift();
		
		// Add this to the end
		textBoxes.push(x);
	}
}
document.addEventListener('keyup', pressShortcutKey, false);