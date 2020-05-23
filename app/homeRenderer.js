const electron = require('electron');
const url = require('url');
const path = require('path');

const {BrowserWindow} = electron

function addDoctor(){
    //Creating new window with custom dimensions
    addDoctorWindow = new BrowserWindow({
        width: 500,
        height: 335,
        title:'Add New Doctor',
        webPreferences:{
            nodeIntegration:true
        }
    });
    //Loading html file 
    addDoctorWindow.loadURL(url.format({
        pathname: path.join(__dirname,'/html/addDoctorWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    addDoctorWindow.on('close',function(){
        addDoctorWindow=null;
    });
    addDoctorWindow.setMenuBarVisibility(false);
}

function addDealer(){
    //Creating new window with custom dimensions
    addDealerWindow = new BrowserWindow({
        width: 500,
        height: 330,
        title:'Add New Dealer',
        webPreferences:{
            nodeIntegration:true
        }
    });
    //Loading html file 
    addDealerWindow.loadURL(url.format({
        pathname: path.join(__dirname,'/html/addDealerWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    addDealerWindow.on('close',function(){
        addDealerWindow=null;
    });
    addDealerWindow.setMenuBarVisibility(false);
}

function addMedicine(){
    //Creating new window with custom dimensions
    addMedicineWindow = new BrowserWindow({
        width: 500,
        height: 600,
        title:'Add New Medicine',
        webPreferences:{
            nodeIntegration:true
        }
    });
    //Loading html file 
    addMedicineWindow.loadURL(url.format({
        pathname: path.join(__dirname,'/html/addMedicineWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    addMedicineWindow.on('close',function(){
        addMedicineWindow=null;
    });
    addMedicineWindow.setMenuBarVisibility(false);
}