// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const shell = require('electron').shell
const path = require('path')
const os = require('os')
const remote = require('electron').remote;
const ipc = require('electron').ipcRenderer;

const protocolHandlerBtn = document.getElementById('protocol-handler')

ipc.on('info', function (event, arg) {
  var myPath = arg;
  var reussite = shell.showItemInFolder(myPath);
  var window = remote.getCurrentWindow();
  if (!reussite) {
    let notification = new Notification('Erreur', {
      body: 'Dossier introuvable.',
    })
  }
  else {
    let notification = new Notification('Ok', {
      body: 'Ok.',
    })
  }
})