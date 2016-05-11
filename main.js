define(function (require, exports, module) {
	"use strict";
	
	var CommandManager = brackets.getModule("command/CommandManager"),
		Menus          = brackets.getModule("command/Menus");
	
	function newWindow() {
		window.open("index.html");
	}
	
	var MY_COMMAND_ID = "new-window.newWindow";
	CommandManager.register("New Window", MY_COMMAND_ID, newWindow);
	
	var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
	menu.addMenuItem(MY_COMMAND_ID);
});