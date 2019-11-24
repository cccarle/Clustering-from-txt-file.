class Centriod {
  constructor(index) {
    this.index = index
    this.assignments = []
    this.oldAssignments = []
    this.values = []
    this.isPrevIdentical = false
  }

  /* 
    Retuns a random integear between the lowest and higest number of a  words frequencies
     */

  set_word_count(i, blogs) {
    let valuesForBlog = []

    blogs.forEach(element => {
      valuesForBlog.push(element.words[i])
    })

    let min = Math.min(...valuesForBlog)
    let max = Math.max(...valuesForBlog)

    let randomValueForValieIndex = Math.floor(
      Math.random() * (max - min + 1) + min
    ) // random value between min and max

    this.values.push(randomValueForValieIndex)
  }

  update_word_count(i, avg) {
    this.values.forEach(element => {
      element = avg
    })
  }

  assigns(blog) {
    this.assignments.push(blog)
  }

  getAssignmentsLenght() {
    return this.assignments.length
  }

  checkIfPrevIsIdentical() {
    if (this.assignments.length !== this.oldAssignments.length) return false
    for (var i = this.assignments.length; i--; ) {
      if (this.assignments[i].title !== this.oldAssignments[i].title)
        return false
    }

    if (true) {
      this.isPrevIdentical = true
    }
  }

  clearAssignments() {
    this.oldAssignments = []
    this.oldAssignments = [...this.assignments] // copy of assignments
    this.assignments = [] // clear assignments
  }
}

module.exports = Centriod
