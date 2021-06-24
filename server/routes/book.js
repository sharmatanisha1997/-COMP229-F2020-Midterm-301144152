/* File name: book.js
 * Student's Name: Tanisha Sharma
 * StudentID: 301144152
 * Date: 2021/06/24
 */

let express = require('express');
let router = express.Router();

let bookController = require('../controllers/book');

/* GET Route for the Book List page - READ Operation */
router.get('/', bookController.displayBookList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', bookController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', bookController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', bookController.displayEditPage);

/* 
* add your code to 
* POST Route for processing the Edit page - UPDATE Operation 
*/
router.post('/edit/:id', bookController.processEditPage);

/* add your code to 
*  GET to perform  Deletion - DELETE Operation 
*/
router.get('/delete/:id', bookController.processDelete);

module.exports = router;