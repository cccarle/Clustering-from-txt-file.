const Centriod = require('./centriod')
const algorithm = require('./pearson')
const jsonData = require('../json.json')

exports.kMeans = () => {
  let maxIteration = 20
  let numberOfWords = 706
  let k = 5 // clusters
  let centriods = []

  for (let i = 0; i < k; i++) {
    let c = new Centriod(i)

    for (let i = 0; i < numberOfWords; i++) {
      c.set_word_count(i, jsonData.blogs)
    }

    centriods.push(c)
  }

  for (let i = 0; i < maxIteration; i++) {
    for (c of centriods) {
      c.clearAssignments()
    }

    jsonData.blogs.forEach(blog => {
      let distance = Number.MAX_VALUE
      let best
      for (c of centriods) {
        let cDist = algorithm.pearson(numberOfWords, c, blog)
        if (cDist < distance) {
          best = c
          distance = cDist
        }
      }

      best.assigns(blog)
    })

    centriods.every(c => {
      // find avergage count for each word
      for (let i = 0; i < numberOfWords; i++) {
        let avg = 0

        // iterate all blogs assinged to this centriod
        c.assignments.forEach(blog => {
          avg += blog.words[i]
          avg /= c.getAssignmentsLenght()

          c.update_word_count(i, avg)
        })
      }
    })
  }
  return centriods
}
