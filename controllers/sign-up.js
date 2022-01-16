module.exports = app => {
    app.get("/sign-up", (req, res) => {
        res.send("you reached registration")
    })
}