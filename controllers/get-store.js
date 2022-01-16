module.exports = app => {
    app.get("/stores", (req, res) => {
        console.log("look at this endpoint")
    })
}