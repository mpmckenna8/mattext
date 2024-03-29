var file =  require('file.js');
var gui = require('nw.gui');




function clickInput(id) {
	var event = document.createEvent('MouseEvents');
	event.initMouseEvent('click');
	document.getElementById(id).dispatchEvent(event);
}

document.addEventListener('keyup', function (e) {
	if (e.keyCode == 'O'.charCodeAt(0) && e.ctrlKey) {
		clickInput('open');
	}
	else if (e.keyCode == 'S'.charCodeAt(0) && e.ctrlKey) {
		clickInput('save');
	}

else if (e.keyCode == 'N'.charCodeAt(0) && e.ctrlKey) {
	gui.Window.open('index.html')}

});

document.getElementById('open').addEventListener('change', function (e) {
  file.open(this.value, document);
});

document.getElementById('save').addEventListener('change', function (e) {
  file.save(this.value, document);
});


var menu = new gui.Menu({type:'menubar'});

//menu.createMacBuiltin("Matext");
//gui.Window.get().menu = menu;

console.log(process.platform)
menu.append(new gui.MenuItem({
	label:'file',
	submenu: new gui.Menu()
}));


menu.items[0].submenu.append(new gui.MenuItem({
	label:'New',
	click:function(){
		gui.Window.open('index.html');
		console.log(menu.items);
	}
}));

menu.items[0].submenu.append(new gui.MenuItem({
	type: 'separator'
}));

menu.items[0].submenu.append(new gui.MenuItem({
	label:'Save',
	click:function(){
    clickInput('save')	}
}));

menu.items[0].submenu.append(new gui.MenuItem({
	type: 'separator'
}));

menu.items[0].submenu.append(new gui.MenuItem({
	label:'Close',
	click:function(){
		gui.Window.get().close();
	}
}))

gui.Window.get().menu = menu;
