const electron = require('electron');
const url = require('url');
const path = require('path');

const {BrowserWindow} = electron

function addDoctor(){
    //Creating new window with custom dimensions
    addDoctorWindow = new BrowserWindow({
        width: 500,
        height: 400,
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
        height: 400,
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
        height: 860,
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

function newPurchaseBill(){
    purchaseBillWindow = new BrowserWindow({
        width:0,
        height:0,
        title:'New Purchase Bill',
        webPreferences:{
            nodeIntegration:true
        }
    });
    purchaseBillWindow.maximize();
    purchaseBillWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/newPurchaseBill.html'),
        protocol: 'file',
        slashes: true
    }));
    purchaseBillWindow.on('close',function(){
        salesBillWindow=null;
    });
    purchaseBillWindow.setMenuBarVisibility(false);
}

function salesBillBook(){
    salesBillBookWindow = new BrowserWindow({
        width:600,
        height:900,
        title:'Sales Bill Book',
        webPreferences:{
            nodeIntegration:true
        }
    });
    salesBillBookWindow.maximize();
    salesBillBookWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/viewSalesBills.html'),
        protocol: 'file',
        slashes: true
    }));
    salesBillBookWindow.on('close',function(){
        salesBillBookWindow=null;
    });
    salesBillBookWindow.setMenuBarVisibility(false);
}

function purchaseBillBook(){
    purchaseBillBookWindow = new BrowserWindow({
        width:600,
        height:900,
        title:'Purchase Bill Book',
        webPreferences:{
            nodeIntegration:true
        }
    });
    purchaseBillBookWindow.maximize();
    purchaseBillBookWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../html/viewPurchaseBills.html'),
        protocol: 'file',
        slashes: true
    }));
    purchaseBillBookWindow.on('close',function(){
        salesBillBookWindow=null;
    });
    purchaseBillBookWindow.setMenuBarVisibility(false);
}

const mainMenuTemplate = [
    {
        label: 'File',
        submenu:[
            {
                label: 'New',
                submenu:[
                    {
                        label:'Doctor',
                        click(){
                            addDoctor();
                        }
                    },
                    {
                        label:'Dealer',
                        click(){
                            addDealer();
                        }
                    },
                    {
                        label:'Medicine',
                        click(){
                            addMedicine();
                        }
                    }
                ]  
            },
            {
                label: 'Modify',
                submenu:[
                    {
                        label:'Doctor',
                        click(){
                            modifyDoctor();
                        }
                    },
                    {
                        label:'Dealer',
                        click(){
                            modifyDealer();
                        }
                    },
                    {
                        label:'Medicine',
                        click(){
                            modifyMedicine();
                        }
                    }
                ]
            },
            {
                label:'Delete Records',
                submenu:[
                    {
                        label:'Doctor',
                        click(){
                            deleteDoctor();
                        }
                    },
                    {
                        label:'Dealer',
                        click(){
                            deleteDealer();
                        }
                    },
                    {
                        label:'Medicine',
                        click(){
                            deleteMedicine();
                        }
                    }
                ]
            },
            {
                type:'separator'
            },
            {
                label:'Preferences',
                click(){
                    console.log("preferences clicked");
                }
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
                label:'New Sales Bill',
                click(){
                    newSalesBill()
                }
            },
            {
                label:'New Purchase Bill',
                click(){
                    newPurchaseBill();
                }  
            },
            {
                type:'separator'
            },
            {
                label:'Sales Bill Actions',
                submenu:[
                    {
                        label:'Modify Sales Bills'
                    },
                    {
                        label:'Delete Sales Bills'
                    }
                ]
            },
            {
                label:'Purchase Bill Actions',
                submenu:[
                    {
                        label:'Modify Purchase Bills'
                    },
                    {
                        label:'Delete Purchase Bills'
                    }
                ]
            },
            {
                type:'separator'
            },
            {
                label:'New Sales Return'
            },
            {
                label:'New Purchase Return'
            }
        ]
    },
    {
        label:'Stocks',
        submenu:[
            {
                label:'Stock Viewer'
            },
            {
                label:'Stock Analysis'
            },
            {
                type:'separator'
            },
            {
                label:'Short Expiry List'
            },
            {
                label:'Expiry Calendar'
            }
        ]
    },
    {
        label:'Bill Books',
        submenu:[
            {
                label:'Sales Bills Book',
                click(){
                    salesBillBook();
                }
            },
            {
                label:'Purchase Bills Book',
                click(){
                    purchaseBillBook();
                }
            }

        ]
    },
    {
        label:'Reports',
        submenu:[
            {
                label:'Sales Reports'
            },
            {
                label:'Purchase Reports'
            },
            {
                type:'separator'
            },
            {
                label:'Stock Report'
            },
            {
                type:'separator'
            },
            {
                label:'Doctor Wise Reports'
            },
            {
                label:'Dealer Wise Reports'
            },
            {
                label:'Medicine/Product Wise Reports'
            }

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
            {
                label:'Tutorial'
            },
            {
                label:'Documentation'
            },
            {
                type:'separator'
            },
            {
                label:'About Us'
            },
            {
                label:'Feedback'
            }
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