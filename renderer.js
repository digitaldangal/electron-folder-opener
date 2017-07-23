// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const shell = require('electron').shell
const path = require('path')
const os = require('os')
const remote = require('electron').remote;
const ipc = require('electron').ipcRenderer;

const protocolHandlerBtn = document.getElementById('protocol-handler')

let notification = new Notification('Folder Opener', {
  body: 'Le programme est bien démarré. En attente de l\'ouverture de dossiers'
})

ipc.on('info', function (event, arg) {
  var myPath = arg;
  var reussite = shell.showItemInFolder(myPath);
  var window = remote.getCurrentWindow();
  var pathCleaned = myPath.replace("\\t", "")
  if (!reussite) {
    let notification = new Notification('Erreur', {
      body: 'Dossier "'+ pathCleaned +'" introuvable.',
    })
  }
})