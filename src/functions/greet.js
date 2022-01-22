const isuppercase = require('./isuppercase')

const greet = (...args) => {
  if (args.lenght > 1) {
    return multiGreet([...args])
  }
  if (Array.isArray(args[0])) {
    return multiGreet([...args[0]])
  } else {
    return singleGreet(args[0])
  }
}

const singleGreet = (name) => {
  if (isuppercase(name)) {
    return `HELLO ${name}!`
  }
  return `Hello, ${name || 'my friend'}.`
}

const multiGreet = (names) => {
  result = 'Hello, '
  for (let i = 0; i < names.length; i++) {
    if (i === names.length - 1) {
      result += `${names[i]}.`
    } else {
      result += `${names[i]} and `
    }
  }

  return result
}

module.exports = greet
