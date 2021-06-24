/* File name: users.js
 * Student's Name: Tanisha Sharma
 * StudentID: 301144152
 * Date: 2021/06/24
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
