const Centriod = require('./centriod')
const algorithm = require('./pearson')
const jsonData = require('../json.json')

exports.kMeans = () => {
  let maxIteration = 20
  let numberOfWords = 706
  let k = 5 // clusters
  let centriods = []

  createCentriods(numberOfWords, k, centriods)

  for (let i = 0; i < maxIteration; i++) {
    while (!centriods.every(centriod => centriod.isFinised())) {
      console.log('klar')

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

const createCentriods = (numberOfWords, k, centriods) => {
  for (let i = 0; i < k; i++) {
    let centriod = new Centriod(i)

    for (let i = 0; i < numberOfWords; i++) {
      centriod.set_word_count(i, jsonData.blogs)
    }

    centriods.push(centriod)
  }
}
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

const clearAssignments = centriods => {
  for (centriod of centriods) {
    centriod.clearAssignments()
  }
}
