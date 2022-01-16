const bookService = require("../service/book-service");

module.exports = app => {
    app.get("/books", (req, res) => {
        res.send(bookService.getAllBoks());
    })
}