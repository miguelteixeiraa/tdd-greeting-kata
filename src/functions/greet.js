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
  normEnd = names.length > 2 ? "and " : ""
  norm = names.length > 2 ? ", " : " and "

  for (let i = 0; i < names.length; i++) {
    if (i === names.length - 1) {
      result += `${normEnd}${names[i]}.`
    } else {
      result += `${names[i]}${norm}`
    }
  }

  return result
}

module.exports = greet
