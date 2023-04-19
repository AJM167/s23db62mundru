var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('books', { title: 'Search Results books' });
});
var router = express.Router();
const books_controlers= require('../controllers/books');

router.get('/', books_controlers.books_view_all_Page );

router.get('/detail', books_controlers.books_view_one_Page);
module.exports = router;
/* GET create books page */
router.get('/create', books_controlers.books_create_Page);

router.get('/update', books_controlers.books_update_Page);

/* GET delete books page */
router.get('/delete', books_controlers.books_delete_Page);

