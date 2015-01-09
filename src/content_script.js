window.onload = function() {
	walk(document.body);
	handleTitle();
};

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
			handleBody(node);
			break;
	}
}

function handleBody(textNode){
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


