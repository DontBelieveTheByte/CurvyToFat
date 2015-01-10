walk(document.body);
handleTitle();
var title = document.title;
var observer = new WebKitMutationObserver(function() {
	walk(document.body);
	if (title != document.title){
		handleTitle();
	}
});
observer.observe(
	document.body,
	{
		childList: true
	}
);

function walk(node){
	var child, next;

	switch ( node.nodeType ){
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child){
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			if (undefined == node.curvyToFat) {
				node.curvyToFat = 'yes';
				handleTextNode(node);
			}
			break;
	}
}

function handleTextNode(textNode){
	textNode.nodeValue = fixText(textNode.nodeValue);
}
function handleTitle(){
	document.title = fixText(document.title);
}

function fixText(text){
	text = text.replace(/(^|\b)fat($|\b)/g, "honest");
	text = text.replace(/(^|\b)Fat($|\b)/g, "Honest");
	text = text.replace(/(^|\b)Curvy($|\b)/g, "Fat");
	text = text.replace(/(^|\b)curvy($|\b)/g, "fat");
	return text;
}


