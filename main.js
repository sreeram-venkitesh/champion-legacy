const electron = require('electron');
const url = require('url');
const path = require('path');

//Classes
const mainMenuTemplate =require('./mainMenuTemplate.js');

const{app, BrowserWindow, Menu, ipcMain} = electron;
const model = require(path.join(__dirname, 'app', 'model.js'))

let mainWindow;
//let addWindow;

app.setPath('userData',path.join(__dirname,"/database/"));


app.on('ready', function(){
    //creating new window
    mainWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true
        }
    });

    model.initDb(app.getPath('userData'),
    // Load a DOM stub here. See renderer.js for the fully composed DOM.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }))
    );
    //Loading html file
    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname,'mainWindow.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }));

    mainWindow.maximize();

    //Quit entire app when closed, sub windows will go
    mainWindow.on('closed',function (){
    app.quit();
    });

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});


