const commahandler = (list) => {
  if (list == null || list[0] == null) {
    return null
  }
  return list
    .reduce((result, current) => {
      if (current.includes(',')) {
        result.push(...current.split(','))
      } else {
        result.push(current)
      }

      return result
    }, [])
    .map((el) => el.trim())
}

module.exports = commahandler
