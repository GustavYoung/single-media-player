// ./main.js
const {app, BrowserWindow} = require('electron')

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1440, height: 900});

  // Specify entry point
  win.loadURL('http://localhost:4200');

  // Show dev tools
  // Remove this line before distributing
  win.maximize(true);
  win.setFullScreen(true);
  //win.webContents.openDevTools();
  win.setKiosk(true);

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});