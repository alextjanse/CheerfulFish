const sqlite3 = require('sqlite3').verbose();

let db: any;

function initDb(): void {
  db = new sqlite3.Database('./database.db', (error: { message: any; }) => {
    if (error) {
      console.error(error.message);
    } else {
      console.log('connected to database');
    }
  });
}

function getDb(): any {
  if (!db) {
    return console.error('no connection with database');
  }
  return db;
}

export { initDb, getDb };
