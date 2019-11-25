const filename = '../server/data/blogdata.txt'
const fs = require('fs')

exports.readFile = () => {
  let row = fs
    .readFileSync(filename, 'utf8')
    .split('\n')
    .map(line => line.split('\t'))

  row[0].shift() // remove blog from first row
  let allWords = row[0]

  row.shift()

  let blogs = []

  row.forEach(rowLine => {
    let blogName = rowLine.shift() // remove first word from row and save as blogname
    let values = rowLine // all values per row

    const value = values.map(val => parseInt(val)) // make values to numbers from strings
    // create an object for every row aka a blogs values

    if (!blogName == '' || undefined) {
      blogs.push({
        title: blogName,
        words: value
      })
    }
  })

  let json = {}

  json.wordCount = allWords.length // lengt of all word
  json.words = allWords // allwords
  json.blogs = blogs // array with object of blogtitle and wordvalue

  return json
}
