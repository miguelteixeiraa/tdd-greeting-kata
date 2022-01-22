const isuppercase = (value) => {
    return value?.split('').reduce((result, current) => {
        if(current === current.toLowerCase()){
            result = false
        }

        return result
    }, true) || false 
}

module.exports = isuppercase