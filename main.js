const electron = require('electron');
const url = require('url');
const path = require('path');

//Classes
const Doctor = require('./app/classes/doctor.js');
const mainMenuTemplate =require('./mainMenuTemplate.js');

const{app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;
//let addWindow;

app.on('ready', function(){
    //creating new window
    mainWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true
        }
    });
    //Loading html file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.maximize();

    //Quit entire app when closed, sub windows will go
    mainWindow.on('closed',function (){
    app.quit();
    });

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});


if(process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu:[{
            label:'Toggle Dev Tools',
            accelerator:'Ctrl+I',
            click(item,focusedWindow){
                focusedWindow.toggleDevTools();
            }
        },
        {
            role:'reload'
        }
    ]
    })
}