const bookService = require("../service/book-service");

module.exports = app => {
    app.post("/books", (req, res) => {
        const contentType = req.get("Content-type");
        if (isHeaderCorrect(contentType)) {
            res.status(400).send("wrong content type")
            return;
        }

        const newBook = req.body;
        console.log(`evaluating book: ${JSON.stringify(newBook)}`);
        const errors = [];
       
        verifyRequiredField(errors, newBook, "title");
        verifyRequiredField(errors, newBook, "releaseDate");

        if (errors.length != 0) {
            res.status(400).send(errors);
            return;
        }

        bookService.save(newBook);
        res.send("right header...")
    });

    const isHeaderCorrect = (header) => {
        return header.toLowerCase() !== "application/json";
    }

    const verifyRequiredField = (errors, newBook, fieldName) => {
        if(!newBook.hasOwnProperty(fieldName) || newBook[fieldName].trim().length < 2){
            errors.push({
                "field": fieldName,
                "message": `${fieldName} is required`
            });
        }
            
    }
}