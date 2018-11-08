
const { app, BrowserWindow } = require('electron');

function createWindow () {
  win = new BrowserWindow({ width: 1080, height: 720 });
  win.loadFile('index.html');
  win.setMenu(null);
}

app.on('ready', createWindow);
