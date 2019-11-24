const jsonData = require('../json.json')

exports.calcPearson = () => {
  let numberOfWords = 706
  let k = 5 // clusters
  let centriods = []

  for (let i = 0; i < k; i++) {
    let c // create new centriod

    for (let i = 0; i < numberOfWords; i++) {
      console.log(set_word_count(i, jsonData.blogs))
    }
  }
}

/* 
Retuns a random integear between the lowest and higest number of a  words frequencies
*/
const set_word_count = (i, blogs) => {
  let valuesForBlog = []

  blogs.forEach(element => {
    valuesForBlog.push(element.words[0])
  })

  let min = Math.min(...valuesForBlog)
  let max = Math.max(...valuesForBlog)

  return Math.floor(Math.random() * (max - min + 1) + min) // random value between min and max
}

const pearson = (numOfWords, blogA, blogB) => {
  let sumA = 0
  let sumB = 0
  let sumAsq = 0
  let sumBsq = 0
  let pSum = 0
  let cntA = 0
  let cntB = 0

  // sum up the word counts for each blog
  for (let i = 0; i < numOfWords; i++) {
    cntA = blogA.words[i]
    cntB = blogB.words[i]
    sumA += cntA
    sumB += cntB
    sumAsq += cntA ** 2
    sumBsq += cntB ** 2
    pSum += cntA * cntB
  }

  const num = pSum - (sumA * sumB) / numOfWords

  const den = Math.sqrt(
    (sumAsq - sumA ** 2 / numOfWords) * (sumBsq - sumB ** 2 / numOfWords)
  )

  // Invert the pearson score
  return 1 - num / den
}
