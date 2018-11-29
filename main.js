
const { app, BrowserWindow } = require('electron');

function createWindow () {
  win = new BrowserWindow({ width: 1080, height: 720, resizable: false});
  win.loadFile('menu.html');
  win.setMenu(null);
}

app.on('ready', createWindow);
