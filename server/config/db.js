/* File name: db.js
 * Student's Name: Tanisha Sharma
 * StudentID: 301144152
 * Date: 2021/06/24
 */

/**
 * Add your code here to fix URI connection
 * 
 */

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

module.exports.URI = uri