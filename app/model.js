'use strict'

const path = require('path')
const fs = require('fs')
const SQL = require('sql.js')
//const view = require(path.join(__dirname, 'view.js'))

/*
  SQL.js returns a compact object listing the columns separately from the
  values or rows of data. This function joins the column names and
  values into a single objects and collects these together by row id.
  {
    0: {first_name: "Jango", last_name: "Reinhardt", person_id: 1},
    1: {first_name: "Svend", last_name: "Asmussen", person_id: 2},
  }
  This format makes updating the markup easy when the DOM input id attribute
  is the same as the column name. See view.showPeople() for an example.
*/
let _rowsFromSqlDataObject = function (object) {
  let data = {}
  let i = 0
  let j = 0
  for (let valueArray of object.values) {
    data[i] = {}
    j = 0
    for (let column of object.columns) {
      Object.assign(data[i], {[column]: valueArray[j]})
      j++
    }
    i++
  }
  return data
}

/*
  Return a string of placeholders for use in a prepared statement.
*/
let _placeHoldersString = function (length) {
  let places = ''
  for (let i = 1; i <= length; i++) {
    places += '?, '
  }
  return /(.*),/.exec(places)[1]
}

SQL.dbOpen = function (databaseFileName) {
  try {
    return new SQL.Database(fs.readFileSync(databaseFileName))
  } catch (error) {
    console.log("Can't open database file.", error.message)
    return null
  }
}

SQL.dbClose = function (databaseHandle, databaseFileName) {
  try {
    let data = databaseHandle.export()
    let buffer = Buffer.alloc(data.length, data)
    fs.writeFileSync(databaseFileName, buffer)
    databaseHandle.close()
    return true
  } catch (error) {
    console.log("Can't close database file.", error)
    return null
  }
}

/*
  A function to create a new SQLite3 database from schema.sql.

  This function is called from main.js during initialization and that's why
  it's passed appPath. The rest of the model operates from renderer and uses
  window.model.db.
*/
module.exports.initDb = function (appPath, whichDb, callback) {
  let dbPath = path.join(appPath, whichDb)
  let createDb = function (dbPath) {
    // Create a database.
    let db = new SQL.Database()
    let query = '';
    switch(dbPath){
      case path.join(appPath, 'doctor.db'):
        query = fs.readFileSync(path.join(__dirname, 'db', 'doctorSchema.sql'), 'utf8')
        break;
      case path.join(appPath, 'dealer.db'):
        query = fs.readFileSync(path.join(__dirname, 'db', 'dealerSchema.sql'), 'utf8')
        break;
      case path.join(appPath, 'medicine.db'):
        query = fs.readFileSync(path.join(__dirname, 'db', 'medicineSchema.sql'), 'utf8')
        break;
      case path.join(appPath, 'salesbillrow.db'):
        query = fs.readFileSync(path.join(__dirname, 'db', 'salesBillRowSchema.sql'), 'utf8')
        break;
      case path.join(appPath, 'salesbill.db'):
        query = fs.readFileSync(path.join(__dirname, 'db', 'salesBillSchema.sql'), 'utf8')
        break;
      case path.join(appPath, 'purchasebillrow.db'):
        query = fs.readFileSync(path.join(__dirname, 'db', 'purchaseBillRowSchema.sql'), 'utf8')
        break;
      case path.join(appPath, 'purchasebill.db'):
        query = fs.readFileSync(path.join(__dirname, 'db', 'purchaseBillSchema.sql'), 'utf8')
        break;
      
    };
    let result = db.exec(query)
    if (Object.keys(result).length === 0 &&
      typeof result.constructor === 'function' &&
      SQL.dbClose(db, dbPath)) {
      console.log('Created a new database.')
    } else {
      console.log('model.initDb.createDb failed.')
    }
  }
  let db = SQL.dbOpen(dbPath)
  if (db === null) {
    /* The file doesn't exist so create a new database. */
    console.log('No existing db')
    createDb(dbPath)
  } else {
    /*
      The file is a valid sqlite3 database. This simple query will demonstrate
      whether it's in good health or not.
    */
    let query = 'SELECT count(*) as `count` FROM `sqlite_master`'
    let row = db.exec(query)
    console.log('Going to print rows')
    console.log(row)
    let tableCount = parseInt(row[0].values)
    if (tableCount === 0) {
      console.log('The file is an empty SQLite3 database.')
      createDb(dbPath)
    } else {
      console.log('The database has', tableCount, 'tables.')
    }
    if (typeof callback === 'function') {
      callback()
    }
  }
}

/*
  Populates the People List.
*/
module.exports.getDoctors = function (appPath) {
  let dbPath = path.join(appPath,'doctor.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'SELECT * FROM `doctors` ORDER BY `doctor_id` ASC'
    try {
      let row = db.exec(query)
      if (row !== undefined && row.length > 0) {
        row = _rowsFromSqlDataObject(row[0])
        // view.showPeople(row)
        // console.log('going to print from inside fucntion')
        // console.log(row)
        return row
      }
    } catch (error) {
      console.log('model.getDoctors', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}

module.exports.getDealers = function (appPath) {
  let dbPath = path.join(appPath,'dealer.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'SELECT * FROM `dealers` ORDER BY `name` ASC'
    try {
      let row = db.exec(query)
      if (row !== undefined && row.length > 0) {
        row = _rowsFromSqlDataObject(row[0])
        // view.showPeople(row)
        // console.log('going to print from inside fucntion')
        // console.log(row)
        return row
      }
    } catch (error) {
      console.log('model.getDealers', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}

module.exports.getMedicines = function (appPath) {
  let dbPath = path.join(appPath,'medicine.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'SELECT * FROM `medicine` ORDER BY `name` ASC'
    try {
      let row = db.exec(query)
      if (row !== undefined && row.length > 0) {
        row = _rowsFromSqlDataObject(row[0])
        // view.showPeople(row)
        // console.log('going to print from inside fucntion')
        // console.log(row)
        return row
      }
    } catch (error) {
      console.log('model.getMedicines', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}

module.exports.getSalesBillRows = function (appPath) {
  let dbPath = path.join(appPath,'salesbillrow.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'SELECT * FROM `salesbillrow` ORDER BY `billrow_id` ASC'
    try {
      let row = db.exec(query)
      if (row !== undefined && row.length > 0) {
        row = _rowsFromSqlDataObject(row[0])
        // view.showPeople(row)
        // console.log('going to print from inside fucntion')
        // console.log(row)
        return row
      }
    } catch (error) {
      console.log('model.getBillRows', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}

module.exports.getPurchaseBillRows = function (appPath) {
  let dbPath = path.join(appPath,'purchasebillrow.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'SELECT * FROM `purchasebillrow` ORDER BY `billrow_id` ASC'
    try {
      let row = db.exec(query)
      console.log(row)
      console.log('query exefcuted')
      if (row !== undefined && row.length > 0) {
        row = _rowsFromSqlDataObject(row[0])
        // view.showPeople(row)
        console.log('going to print from inside fucntion')
        console.log(row)
        return row
      }
    } catch (error) {
      console.log('model.getPurchaseBillRows', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}

module.exports.getSalesBills = function (appPath) {
  let dbPath = path.join(appPath,'salesbill.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'SELECT * FROM `salesbill` ORDER BY `bill_id` ASC'
    try {
      let row = db.exec(query)
      if (row !== undefined && row.length > 0) {
        row = _rowsFromSqlDataObject(row[0])
        // view.showPeople(row)
        // console.log('going to print from inside fucntion')
        // console.log(row)
        return row
      }
    } catch (error) {
      console.log('model.getBills', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}

module.exports.getPurchaseBills = function (appPath) {
  let dbPath = path.join(appPath,'purchasebill.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'SELECT * FROM `purchasebill` ORDER BY `bill_id` ASC'
    try {
      let row = db.exec(query)
      if (row !== undefined && row.length > 0) {
        row = _rowsFromSqlDataObject(row[0])
        // view.showPeople(row)
        // console.log('going to print from inside fucntion')
        // console.log(row)
        return row
      }
    } catch (error) {
      console.log('model.getPurchaseBills', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}


  
/*
  Fetch a person's data from the database.
*/
module.exports.getDoctor = function (pid) {
  let dbPath = path.join(appPath,'doctor.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'SELECT * FROM `doctors` WHERE `id` IS ?'
    let statement = db.prepare(query, [pid])
    try {
      if (statement.step()) {
        let values = [statement.get()]
        let columns = statement.getColumnNames()
        return _rowsFromSqlDataObject({values: values, columns: columns})
      } else {
        console.log('model.getDoctor', 'No data found for person_id =', pid)
      }
    } catch (error) {
      console.log('model.getDoctor', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}

module.exports.getDealer = function (pid) {
  let dbPath = path.join(appPath,'dealer.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'SELECT * FROM `dealers` WHERE `id` IS ?'
    let statement = db.prepare(query, [pid])
    try {
      if (statement.step()) {
        let values = [statement.get()]
        let columns = statement.getColumnNames()
        return _rowsFromSqlDataObject({values: values, columns: columns})
      } else {
        console.log('model.getDealer', 'No data found for person_id =', pid)
      }
    } catch (error) {
      console.log('model.getDealer', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}

module.exports.getMedicine = function (pid) {
  let dbPath = path.join(appPath,'medicine.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'SELECT * FROM `medicine` WHERE `id` IS ?'
    let statement = db.prepare(query, [pid])
    try {
      if (statement.step()) {
        let values = [statement.get()]
        let columns = statement.getColumnNames()
        return _rowsFromSqlDataObject({values: values, columns: columns})
      } else {
        console.log('model.getMedicine', 'No data found for person_id =', pid)
      }
    } catch (error) {
      console.log('model.getMedicine', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}

/*
  Delete a person's data from the database.
*/
module.exports.deleteDoctor = function (appPath, pid, callback) {
  let dbPath = path.join(appPath,'doctor.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'DELETE FROM `doctors` WHERE `doctor_id` IS ?'
    let statement = db.prepare(query)
    try {
      if (statement.run([pid])) {
        if (typeof callback === 'function') {
          callback()
        }
      } else {
        console.log('model.deleteDoctor', 'No data found for person_id =', pid)
      }
    } catch (error) {
      console.log('model.deleteDoctor', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}

module.exports.deleteDealer = function (appPath, pid, callback) {
  let dbPath = path.join(appPath,'dealer.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'DELETE FROM `dealers` WHERE `dealer_id` IS ?'
    let statement = db.prepare(query)
    try {
      if (statement.run([pid])) {
        if (typeof callback === 'function') {
          callback()
        }
      } else {
        console.log('model.deleteDealer', 'No data found for person_id =', pid)
      }
    } catch (error) {
      console.log('model.deleteDealer', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}

module.exports.deleteMedicine = function (appPath, pid, callback) {
  let dbPath = path.join(appPath,'medicine.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'DELETE FROM `medicine` WHERE `medicine_id` IS ?'
    let statement = db.prepare(query)
    try {
      if (statement.run([pid])) {
        if (typeof callback === 'function') {
          callback()
        }
      } else {
        console.log('model.deleteMedicine', 'No data found for person_id =', pid)
      }
    } catch (error) {
      console.log('model.deleteMedicine', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}

module.exports.updateDoctors = function (appPath) {
  let dbPath = path.join(appPath,'doctor.db')
  let db = SQL.dbOpen(dbPath)
  if (db !== null) {
    let query = 'SELECT * FROM `doctors` ORDER BY `name` ASC'
    try {
      let row = db.exec(query)
      if (row !== undefined && row.length > 0) {
        row = _rowsFromSqlDataObject(row[0])
        // view.showPeople(row)
        // console.log('going to print from inside fucntion')
        // console.log(row)
        return row
      }
    } catch (error) {
      console.log('model.getDoctors', error.message)
    } finally {
      SQL.dbClose(db, dbPath)
    }
  }
}
/*
  Insert or update a person's data in the database.
*/
module.exports.saveFormData = function (appPath, tableName, whichDb, keyValue, callback) {
  if (keyValue.columns.length > 0) {
    let dbPath = path.join(appPath, whichDb)
    //let dbPath = path.join(appPath,'example.db')
    let db = SQL.dbOpen(dbPath)
    // let db = SQL.dbOpen(window.model.db)
    if (db !== null) {
      let query = 'INSERT OR REPLACE INTO `' + tableName
      query += '` (`' + keyValue.columns.join('`, `') + '`)'
      query += ' VALUES (' + _placeHoldersString(keyValue.values.length) + ')'
      let statement = db.prepare(query)
      try {
        if (statement.run(keyValue.values)) {
          $('#' + keyValue.columns.join(', #'))
          .addClass('form-control-success')
          .animate({class: 'form-control-success'}, 1500, function () {
            if (typeof callback === 'function') {
              callback()
            }
          })
        } else {
          console.log('model.saveFormData', 'Query failed for', keyValue.values)
        }
      } catch (error) {
        console.log('model.saveFormData', error.message)
      } finally {
        SQL.dbClose(db, dbPath)
      }
    }
  }
}

module.exports.editFormData = function (appPath, tableName, whichDb, keyValue, callback) {
  if (keyValue.columns.length > 0) {
    let dbPath = path.join(appPath, whichDb)
    //let dbPath = path.join(appPath,'example.db')
    let db = SQL.dbOpen(dbPath)
    // let db = SQL.dbOpen(window.model.db)
    if (db !== null) {
      
      let query = 'INSERT OR REPLACE INTO `' + tableName
      query += '` (`' + keyValue.columns.join('`, `') + '`)'
      query += ' VALUES (' + _placeHoldersString(keyValue.values.length) + ')'
      let statement = db.prepare(query)
      try {
        if (statement.run(keyValue.values)) {
           $('#' + keyValue.columns.join(', #')), 1500, function () {
            if (typeof callback === 'function') {
              callback()
            }
        }} else {
          console.log('model.saveFormData', 'Query failed for', keyValue.values)
        }
      } catch (error) {
        console.log('model.saveFormData', error.message)
      } finally {
        SQL.dbClose(db, dbPath)
      }
    }
  }
}

module.exports.saveSalesBillRow = function (appPath, tableName, whichDb, keyValue, callback) {
  if (keyValue.columns.length > 0) {
    let dbPath = path.join(appPath, whichDb)
    //let dbPath = path.join(appPath,'example.db')
    let db = SQL.dbOpen(dbPath)
    // let db = SQL.dbOpen(window.model.db)
    if (db !== null) {
      
      let query = 'INSERT INTO `' + tableName
      query += '` (`' + keyValue.columns.join('`, `') + '`)'
      query += ' VALUES (' + _placeHoldersString(keyValue.values.length) + ')'
      let statement = db.prepare(query)
      try {
        if (statement.run(keyValue.values)) {
          // $('#' + keyValue.columns.join(', #'))
          // .addClass('form-control-success')
          // .animate({class: 'form-control-success'}, 1500, function () {
            if (typeof callback === 'function') {
              callback()
            }
          
        } else {
          console.log('model.saveFormData', 'Query failed for', keyValue.values)
        }
      } catch (error) {
        console.log('model.saveFormData', error.message)
      } finally {
        SQL.dbClose(db, dbPath)
      }
    }
  }
}

module.exports.savePurchaseBillRow = function (appPath, tableName, whichDb, keyValue, callback) {
  if (keyValue.columns.length > 0) {
    let dbPath = path.join(appPath, whichDb)
    //let dbPath = path.join(appPath,'example.db')
    let db = SQL.dbOpen(dbPath)
    // let db = SQL.dbOpen(window.model.db)
    if (db !== null) {
      
      let query = 'INSERT INTO `' + tableName
      query += '` (`' + keyValue.columns.join('`, `') + '`)'
      query += ' VALUES (' + _placeHoldersString(keyValue.values.length) + ')'
      let statement = db.prepare(query)
      try {
        if (statement.run(keyValue.values)) {
          // $('#' + keyValue.columns.join(', #'))
          // .addClass('form-control-success')
          // .animate({class: 'form-control-success'}, 1500, function () {
            if (typeof callback === 'function') {
              callback()
            }
          
        } else {
          console.log('model.saveFormData', 'Query failed for', keyValue.values)
        }
      } catch (error) {
        console.log('model.saveFormData', error.message)
      } finally {
        SQL.dbClose(db, dbPath)
      }
    }
  }
}

module.exports.saveSalesBill = function (appPath, tableName, whichDb, keyValue, callback) {
  if (keyValue.columns.length > 0) {
    let dbPath = path.join(appPath, whichDb)
    //let dbPath = path.join(appPath,'example.db')
    let db = SQL.dbOpen(dbPath)
    // let db = SQL.dbOpen(window.model.db)
    if (db !== null) {
      
      let query = 'INSERT INTO `' + tableName
      query += '` (`' + keyValue.columns.join('`, `') + '`)'
      query += ' VALUES (' + _placeHoldersString(keyValue.values.length) + ')'
      let statement = db.prepare(query)
      try {
        if (statement.run(keyValue.values)) {
          // $('#' + keyValue.columns.join(', #'))
          // .addClass('form-control-success')
          // .animate({class: 'form-control-success'}, 1500, function () {
            if (typeof callback === 'function') {
              callback()
            }
          
        } else {
          console.log('model.saveFormData', 'Query failed for', keyValue.values)
        }
      } catch (error) {
        console.log('model.saveFormData', error.message)
      } finally {
        SQL.dbClose(db, dbPath)
      }
    }
  }
}

module.exports.savePurchaseBill = function (appPath, tableName, whichDb, keyValue, callback) {
  if (keyValue.columns.length > 0) {
    let dbPath = path.join(appPath, whichDb)
    //let dbPath = path.join(appPath,'example.db')
    let db = SQL.dbOpen(dbPath)
    // let db = SQL.dbOpen(window.model.db)
    if (db !== null) {
      
      let query = 'INSERT INTO `' + tableName
      query += '` (`' + keyValue.columns.join('`, `') + '`)'
      query += ' VALUES (' + _placeHoldersString(keyValue.values.length) + ')'
      let statement = db.prepare(query)
      try {
        if (statement.run(keyValue.values)) {
          // $('#' + keyValue.columns.join(', #'))
          // .addClass('form-control-success')
          // .animate({class: 'form-control-success'}, 1500, function () {
            if (typeof callback === 'function') {
              callback()
            }
          
        } else {
          console.log('model.saveFormData', 'Query failed for', keyValue.values)
        }
      } catch (error) {
        console.log('model.saveFormData', error.message)
      } finally {
        SQL.dbClose(db, dbPath)
      }
    }
  }
}