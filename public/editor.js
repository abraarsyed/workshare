var socket = io();
var editor = ace.edit("editor");
editor.setTheme("ace/theme/vibrant_ink");
editor.getSession().setMode("ace/mode/javascript");
editor.setPrintMarginColumn(false);
editor.setFontSize(28);
editor.setShowInvisibles(true);
editor.setflag = false;
editor.on('change', function() {
	if (!editor.setflag)
	{
		socket.emit('editorUpdate', {
			contents:editor.getValue()
		});
	}	 
});
socket.on('editorUpdate', function(data){
	editor.setflag = true;
	editor.setValue(data.contents);
	editor.clearSelection();
        console.log(data);
	editor.setflag = false;
});
