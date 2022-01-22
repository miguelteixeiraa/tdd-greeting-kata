const isuppercase = require('./isuppercase')
const commahandler = require('./commahandler')

const greet = (...rawArgs) => {
  if (rawArgs[0] == null) {
    return singleGreet(null)
  }
  
  let args
  if (rawArgs.length > 1) {
    args = commahandler([...rawArgs])
    return multiGreet([...args])
  }
  if (Array.isArray(rawArgs[0])) {
    args = commahandler([...rawArgs[0]])
    return multiGreet([...args])
  } else {
    args = commahandler([rawArgs[0]])
    if (args.length > 1) {
      return multiGreet([...args])
    }
    return singleGreet(args[0])
  }
}

const singleGreet = (name) => {
  if (isuppercase(name)) {
    return `HELLO ${name}!`
  }
  return `Hello, ${name || 'my friend'}.`
}

const multiGreet = (args) => {
  let names = [...args]
  const uppercases = names.reduce((result, current) => {
    if (isuppercase(current)) {
      result.push(current)
    }
    return result
  }, [])

  let upperGreet = null

  if (uppercases.length > 0) {
    names = names.filter((name) => name != uppercases[0])
    upperGreet = singleGreet(uppercases[0])
  }

  result = 'Hello, '
  normEnd = names.length > 2 ? 'and ' : ''
  norm = names.length > 2 ? ', ' : ' and '

  for (let i = 0; i < names.length; i++) {
    if (i === names.length - 1) {
      result += `${normEnd}${names[i]}.`
    } else {
      result += `${names[i]}${norm}`
    }
  }

  return result + (uppercases.length ? ' AND ' + upperGreet : '')
}

module.exports = greet
