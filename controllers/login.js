const userService = require("../service/user-service");

module.exports = app => {
    app.post("/login", (req, res) => {
        const errors = [];
        const user = req.body;
        verifyRequiredField(errors, user, "username");
        verifyRequiredField(errors, user, "password");

        console.log(`authentication requested, user: ${JSON.stringify(user)}`)

        if (userService.shouldAuthenticate(user)) {
            const token = userService.getToken(user);
            console.log(`authentication successfull, user: ${JSON.stringify(user)}`)
            res.send({
                "Authorization": token
            })
            return;
        }
        res.send("Authentication failed");
    })

    const verifyRequiredField = (errors, object, fieldName) => {
        if (!object.hasOwnProperty(fieldName) || object[fieldName].trim().length < 2) {
            errors.push({
                "field": fieldName,
                "message": `${fieldName} is required`
            });
        }

    }
}