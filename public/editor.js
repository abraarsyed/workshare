var socket = io();
var editor = ace.edit("editor");
editor.setTheme("ace/theme/vibrant_ink");
editor.getSession().setMode("ace/mode/javascript");
editor.setPrintMarginColumn(false);
editor.setFontSize(28);
editor.setShowInvisibles(true);
sharejs.open("documentname", 'text', function(error, doc) {
	if(error) {
		throw(error);
	}
	if(doc.created) {
		doc.insert(0, "HelloWorld;");
	}
	doc.attach_ace(editor);
	editor.setReadOnly(false);
});
