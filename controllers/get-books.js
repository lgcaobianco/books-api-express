const bookService = require("../service/book-service");
const userService = require("../service/user-service")

module.exports = app => {
    app.get("/books", (req, res) => {
        if (!req.headers.hasOwnProperty("authorization")) {
            res.status(401).send("Sorry, only logged users can view books");
            return;
        }

        if(userService.isTokenValid(req.headers["authorization"])){
            res.send(bookService.getAllBoks());
            return;
        }
        res.status(401).send("Authorization has expired, please login again")
    })
}