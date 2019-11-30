const fs = require('fs')
const prettier = require('prettier')
const colors = require('./colors')

const types = Object.keys(colors).map(color => {
  const value = colors[color]
  if (typeof value === 'string') {
    return `export const ${color}: ${JSON.stringify(value)}`
  }
  return `export const ${color}: {
    ${Object.keys(value).map(key => {
      return `${JSON.stringify(key)}: ${JSON.stringify(value[key])}`
    }).join('\n')}
  }`
}).join('\n\n')

fs.writeFileSync('./index.d.ts', prettier.format(types, {
  parser: 'typescript',
  semi: false,
  singleQuote: true
}), 'utf8')