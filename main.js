const electron = require('electron');
const url = require('url');
const path = require('path');

//Classes
const mainMenuTemplate =require('./app/menu/mainMenuTemplate.js');

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

    model.initDb(app.getPath('userData'),'doctor.db',
    // Load a DOM stub here. See renderer.js for the fully composed DOM.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'app','html','mainWindow.html'),
        protocol: 'file:',
        slashes: true
    })));
    console.log('Doctor Db init')
    model.initDb(app.getPath('userData'),'dealer.db',() => {
        console.log('Dealer Db init')
    });
    //console.log('Dealer Db init')
    model.initDb(app.getPath('userData'),'medicine.db',() => {
        console.log('Medicine Db init')
    });
    //console.log('Medicine Db init')
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


