const { doesNotMatch } = require("assert");

const users = [{
    "username": "lgcaobianco",
    "password": "123"
}];

const findUserByUsername = username => {
    return users.filter(user => user.username === username)[0];
}

const shouldAuthenticate = (user) => {
    const userFound = findUserByUsername(user.username);
    if (user.password === userFound.password) {
        return true;
    }
}

const isTokenValid = (token) => {
    const decodedToken = JSON.parse(Buffer.from(token, 'base64'));
    if(Date.now() > decodedToken.expiration){
        return false;
    }
    return true;
}

const getToken = (user) => {
    const currentDateInUtc = Date.now();
    const expirationDateInUtc = currentDateInUtc + (1000 *  60);
    const token = {
        "username": user.username,
        "expiration": expirationDateInUtc
    }
    return Buffer.from(JSON.stringify(token)).toString('base64');
}

module.exports = {
    shouldAuthenticate,
    isTokenValid,
    getToken
}