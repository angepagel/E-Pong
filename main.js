
const { app, BrowserWindow } = require('electron');

function createWindow () {
  win = new BrowserWindow({ width: 370, height: 640, resizable: false});
  win.loadFile('menu.html');
  win.setMenu(null);
}

app.on('ready', createWindow);
