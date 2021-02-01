const camelToKebab = (key: string) => {
  const result = key.replace(/([A-Z])/g, ' $1')
  return result.split(' ').join('-').toLowerCase()
}

const objectCamelToKebab = (object: Record<string, unknown>) => {
  const keys = Object.keys(object)
  const values = Object.values(object).map(value => {
    if (value > 1) {
      return String(`${value}px`)
    }
    return value
  })
  const keysResult = keys.map((key, i) => {
    const kebabKey = camelToKebab(key)
    const result = { [kebabKey]: values[i] }
    return result
  })
  const mapValues = Object.values(keysResult)
  const stringResult = JSON.stringify(mapValues)
    .replace(/(['{"}'])/g, '')
    .replace(/([','])/g, ';')
  return stringResult
}

export default objectCamelToKebab
