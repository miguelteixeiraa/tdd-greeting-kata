const isuppercase = require("./isuppercase")

const greet = (name) => {
    if(isuppercase(name)){
        return `HELLO ${name}!`
    }
    return `Hello, ${name || 'my friend'}.`
}

module.exports = greet