const filename = '../server/data/blogdata.txt'
const fs = require('fs')

exports.readFile = () => {
  let row = fs
    .readFileSync(filename, 'utf8')
    .split('\n')
    .map(line => line.split('\t'))

  row[0].shift() // remove blog from first row
  let allWords = row[0]

  let blogs = []

  row.shift()

  row.forEach(rowLine => {
    let blogName = rowLine.shift() // remove first word from row and save as blogname
    let values = rowLine

    let wordsWithValues = allWords.map((x, i) => {
      return { word: x, value: parseInt(values[i]) }
    })

    let blog = {
      blog: blogName,
      words: wordsWithValues
    }
    blogs.push(blog)
  })

  blogs.pop()
  // console.log(searchForValueForWord(blogs, 'china'))
}

const searchForValueForWord = (blogs, word) => {
  let count = 0
  blogs.forEach(blog => {
    blog.words.forEach(element => {
      if (element.word == word) {
        if (Number(element.value) > Number(0)) {
          count += element.value
        }
        console.log(blog.blog + ' ' + element.value)
      }
    })
  })

  return count
}
