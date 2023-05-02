/*
To start a new project 
nmp init -y
npm install better driver
*/

//1 import the database driver
const databaseDriver = require('better-sqlite3');

//2. connect, to the database
const db = databaseDriver('bands.sqlite3');

//prepare a statement, execute statement

//3. send our first query, prepare a statement
let statement = db.prepare('SELECT * FROM bands');

//4. execute statement
let results = statement.all();

//5. check the results
//console.log(results);

//6. using paramaters
let statement2 = db.prepare(

    `SELECT * FROM bands WHERE genre = ?`
);

let results2 = statement2.all('Metal');

//console.log(results2);

// using named paramaters
let statement3 = db.prepare(

    `SELECT * FROM bands WHERE genre = :genre`
);

let results3 = statement3.all({

    genre: 'Rock'
});

//console.log(results3);



//console.log(results);
let table = 'bands';

//insert something into the database
let insertStatement = db.prepare(

    `INSERT INTO ${table} (name, genre) VALUES (:name, :genre)`
);

let resultOfinsert = insertStatement.run({

    name: 'Bathory',
    genre: 'Metal'
});

console.log(resultOfinsert);