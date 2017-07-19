/*
* Lines starting with a # are written by me.
*/

const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const dialog = require('electron').dialog

// # Here is code from this pull request : https://github.com/electron/electron-api-demos/pull/275
// # This solves a problem where Windows was unable to launch the app from a web link
if (process.defaultApp) {
    // If we have the path to our app we set the protocol client to launch electron.exe with the path to our app
    if (process.argv.length >= 2) {
      app.setAsDefaultProtocolClient('folderopener', process.execPath, [path.resolve(process.argv[1])])
    }
    } else {
      app.setAsDefaultProtocolClient('folderopener')
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// # Here is what happens when the program is called by the protocol :
app.makeSingleInstance(function (event, url) {
  var monUrl = event[2]; //Here is contained the URL that triggered the app
  
  console.log(monUrl);

  var myPath = decodeURI(monUrl.split('?path=')[1]); //We take the "parameter", which is our path to the folder we want to open

  // # Some lines to prepare the opening
  const shell = require('electron').shell
  const os = require('os')

  console.log(myPath);

  // # Finally, we open the folder
  console.log(shell.showItemInFolder(myPath));

  // # Once we're done, we close the app
  app.quit();
})

// # Since when we launch the app for the first time via the protocol it's unable to trigger the event above,
// # we have to call the protocol twice from the web page.
// # So we close the app that had not the chance to open the folder under 5 seconds.
// # This prevents us from having a lot of Electron processes.
setTimeout(function() { app.quit(); }, 5000);