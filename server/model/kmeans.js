const Centriod = require('./centriod')
const algorithm = require('./pearson')
const jsonData = require('../json.json')

exports.kMeans = () => {
  let maxIteration = 20
  let numberOfWords = jsonData.wordCount
  let k = 5
  let centriods = []

  createCentriods(numberOfWords, k, centriods)

  for (let i = 0; i < maxIteration; i++) {
    while (!centriods.every(centriod => centriod.isFinised())) {
      clearAssignments(centriods)

      jsonData.blogs.forEach(blog => {
        let distance = Number.MAX_VALUE
        let best = undefined
        for (centriod of centriods) {
          let cDist = algorithm.pearson(numberOfWords, centriod, blog)
          if (cDist < distance) {
            best = centriod
            distance = cDist
          }
        }

        best.assigns(blog)
      })

      moveCentriodToCenter(centriods, numberOfWords)
    }
  }
  return centriods
}

/* 
   Create 5 cluster given by K. Create centriod and set random values between the word frequenies.
     */

const createCentriods = (numberOfWords, k, centriods) => {
  for (let i = 0; i < k; i++) {
    let centriod = new Centriod(i)

    for (let i = 0; i < numberOfWords; i++) {
      centriod.set_word_count(i, jsonData.blogs)
    }
    centriods.push(centriod)
  }
}

/* 
  Iterates all blogs in centriod and update every word with average
     */

const moveCentriodToCenter = (centriods, numberOfWords) => {
  centriods.forEach(centroid => {
    // find avergage count for each word
    for (let i = 0; i < numberOfWords; i++) {
      let avg = 0

      // iterate all blogs assinged to this centriod
      centroid.assignments.forEach(blog => {
        avg += blog.words[i]
        avg /= centroid.getAssignmentsLenght()

        centroid.update_word_count(i, avg)
      })
    }
    centroid.checkIfPrevIsIdentical()
  })
}

/* 
  Clear all centriods assignments.
     */

const clearAssignments = centriods => {
  for (centriod of centriods) {
    centriod.clearAssignments()
  }
}
