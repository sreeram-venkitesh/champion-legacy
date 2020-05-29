const electron = require('electron');
const url = require('url');
const path = require('path');

const {BrowserWindow} = electron

function addDoctor(){
    //Creating new window with custom dimensions
    addDoctorWindow = new BrowserWindow({
        width: 500,
        height: 340,
        title:'Add New Doctor',
        webPreferences:{
            nodeIntegration:true
        }
    });
    //Loading html file 
    addDoctorWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/addDoctorWindow.html'),
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
        height: 340,
        title:'Add New Dealer',
        webPreferences:{
            nodeIntegration:true
        }
    });
    //Loading html file 
    addDealerWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/addDealerWindow.html'),
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
        height: 750,
        title:'Add New Medicine',
        webPreferences:{
            nodeIntegration:true
        }
    });
    //Loading html file 
    addMedicineWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/addMedicineWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    addMedicineWindow.on('close',function(){
        addMedicineWindow=null;
    });
    addMedicineWindow.setMenuBarVisibility(false);
}

function modifyDoctor(){
    modifyDoctorWindow = new BrowserWindow({
        width:1000,
        height:800,
        title:'Doctor Book',
        webPreferences:{
            nodeIntegration:true
        }
    });
    modifyDoctorWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/doctorBook.html'),
        protocol: 'file',
        slashes: true
    }));
    modifyDoctorWindow.on('close',function(){
        modifyDoctorWindow=null;
    });
    modifyDoctorWindow.setMenuBarVisibility(false);
}

function modifyDealer(){
    modifyDealerWindow = new BrowserWindow({
        width:1000,
        height:800,
        title:'Dealer Book',
        webPreferences:{
            nodeIntegration:true
        }
    });
    modifyDealerWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/dealerBook.html'),
        protocol: 'file',
        slashes: true
    }));
    modifyDealerWindow.on('close',function(){
        modifyDealerWindow=null;
    });
    modifyDealerWindow.setMenuBarVisibility(false);
}

function modifyMedicine(){
    modifyMedicineWindow = new BrowserWindow({
        width:1000,
        height:970,
        title:'Medicine Book',
        webPreferences:{
            nodeIntegration:true
        }
    });
    modifyMedicineWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/medicineBook.html'),
        protocol: 'file',
        slashes: true
    }));
    modifyMedicineWindow.on('close',function(){
        modifyMedicineWindow=null;
    });
    modifyMedicineWindow.setMenuBarVisibility(false);
}

function deleteDoctor(){
    deleteDoctorWindow = new BrowserWindow({
        width:500,
        height:800,
        title:"Doctor;s Book",
        webPreferences:{
            nodeIntegration:true
        }
    });
    deleteDoctorWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/deleteDoctor.html'),
        protocol: 'file',
        slashes: true
    }));
    deleteDoctorWindow.on('close',function(){
        deleteDoctorWindow=null;
    });
    deleteDoctorWindow.setMenuBarVisibility(false);
}

function deleteDealer(){
    deleteDealerWindow = new BrowserWindow({
        width:500,
        height:800,
        title:"Dealer's Book",
        webPreferences:{
            nodeIntegration:true
        }
    });
    deleteDealerWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/deleteDealer.html'),
        protocol: 'file',
        slashes: true
    }));
    deleteDealerWindow.on('close',function(){
        deleteDealerWindow=null;
    });
    deleteDealerWindow.setMenuBarVisibility(false);
}

function deleteMedicine(){
    deleteMedicineWindow = new BrowserWindow({
        width:500,
        height:800,
        title:'Medicine Book',
        webPreferences:{
            nodeIntegration:true
        }
    });
    deleteMedicineWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/deleteMedicine.html'),
        protocol: 'file',
        slashes: true
    }));
    deleteMedicineWindow.on('close',function(){
        deleteMedicineWindow=null;
    });
    deleteMedicineWindow.setMenuBarVisibility(false);
}

function newSalesBill(){
    salesBillWindow = new BrowserWindow({
        width:0,
        height:0,
        title:'New Sales Bill',
        webPreferences:{
            nodeIntegration:true
        }
    });
    salesBillWindow.maximize();
    salesBillWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/newSalesBill.html'),
        protocol: 'file',
        slashes: true
    }));
    salesBillWindow.on('close',function(){
        salesBillWindow=null;
    });
    salesBillWindow.setMenuBarVisibility(false);
}

const mainMenuTemplate = [
    {
        label: 'File',
        submenu:[
            {
                label: 'Doctors',
                submenu:[
                    {
                        label:'New',
                        click(){
                            addDoctor();
                        }
                    },
                    {
                        label:'Modify',
                        click(){
                            modifyDoctor();
                        }
                    },
                    {
                        label:'Delete',
                        click(){
                            deleteDoctor();
                        }
                    }
                ]  
            },
            {
                label: 'Dealers',
                submenu:[
                    {
                        label:'New',
                        click(){
                            addDealer();
                        }
                    },
                    {
                        label:'Modify',
                        click(){
                            modifyDealer();
                        }
                    },
                    {
                        label:'Delete',
                        click(){
                            deleteDealer();
                        }
                    }
                ]
            },
            {
                label:'Medicines',
                submenu:[
                    {
                        label:'New',
                        click(){
                            addMedicine();
                        }
                    },
                    {
                        label:'Modify',
                        click(){
                            modifyMedicine();
                        }
                    },
                    {
                        label:'Delete',
                        click(){
                            deleteMedicine();
                        }
                    }
                ]
            },
            {
                label:'Quit',
                accelerator: 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    },
    {
        label:'Transactions',
        submenu:[
            {
                label:'Sale',
                submenu:[
                    {
                        label:'New',
                        click(){
                            newSalesBill()
                        }
                    },
                    {
                        label:'Modify'
                    },
                    {
                        label:'Delete'
                    }
                ]
            },
            {
                label:'Purchase',
                submenu:[
                    {
                        label:'New',
                        
                    },
                    {
                        label:'Modify'
                    },
                    {
                        label:'Delete'
                    }
                ]
            },
            {
                label:'Sales Return'
            },
            {
                label:'Purchase Return'
            }
        ]
    },
    {
        label:'Stocks',
        submenu:[

        ]
    },
    {
        label:'Books',
        submenu:[

        ]
    },
    {
        label:'Reports',
        submenu:[

        ]
    },
    {
        label:'Advanced',
        submenu:[
            {
                label:'Backup',
                submenu:[
                    {
                        label:'Create Backup'
                    },
                    {
                        label:'Restore from Backup'
                    }
                ]
            },
            {
                label:'Financial Year',
                submenu:[
                    {
                        label:'Start New Financial Year'
                    },
                    {
                        label:'End Current Financial Year'
                    }
                ]
            }
        ]

    },
    {
        label:'Help',
        submenu:[

        ]
    }
];

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

module.exports = mainMenuTemplate;