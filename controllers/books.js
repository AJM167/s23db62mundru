const books = require('../models/books');
var Books = require('../models/books');
// List of all bookss
// exports.books_list = function(req, res) {
//  res.send('NOT IMPLEMENTED: books list');
// };
// for a specific books.
exports.books_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: books detail: ' + req.params.id);
};
// Handle books create on POST.
// exports.books_create_post = function(req, res) {
//  res.send('NOT IMPLEMENTED: books create POST');
// };
// Handle books delete form on DELETE.
exports.books_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: books delete DELETE ' + req.params.id);
};
// Handle books update form on PUT.
exports.books_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Books.findById( req.params.id)
    // Do updates of properties
    if(req.body.books_type)
    toUpdate.books_type = req.body.books_type;
    // console.log("Body"+req.body); 
    if(req.body.books_price){
        toUpdate.books_price = req.body.books_price;
    }
    if(req.body.books_year) 
    toUpdate.books_year = req.body.books_year;
    let result = await toUpdate.save();
    // console.log("Price"+result.books_price)
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};

// List of all bookss
exports.books_list = async function(req, res) {
 try{
 thebookss = await Books.find();
 res.send(thebookss);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 }
};

// VIEWS
// Handle a show all view
exports.books_view_all_Page = async function(req, res) {
    try{
    thebookss = await Books.find();
    res.render('books', { title: 'Books Search Results', results: thebookss });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle books create on POST.
exports.books_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Books();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"books_type":"goat", "cost":12, "size":"large"}
    document.books_type = req.body.books_type;
    document.books_year = req.body.books_year;
    document.books_price = req.body.books_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // for a specific books.
exports.books_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Books.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    // Handle books update form on PUT.
// Handle Boats delete form on DELETE. 
exports.books_delete =  async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Books.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};  
// Handle a show one view with id specified by query
exports.books_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Books.findById( req.query.id)
    res.render('booksdetail',
   { title: 'Books Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   exports.books_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('bookscreate', { title: 'books Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
   exports.books_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await books.findById(req.query.id)
    res.render('booksupdate', { title: 'books Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };   
   exports.books_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await books.findById(req.query.id)
    res.render('booksdelete', { title: 'books Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    