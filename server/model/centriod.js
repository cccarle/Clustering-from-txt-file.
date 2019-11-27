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

  /* 
    update specfic word by average
     */

  update_word_count(i, avg) {
    this.values[i] = avg
    // this.values.forEach(element => {
    //   element = avg
    // })
  }

  /* 
    Add a blog to assignments
     */

  assigns(blog) {
    this.assignments.push(blog)
  }

  /* 
   Returns the lenght of the assignments array
     */

  getAssignmentsLenght() {
    return this.assignments.length
  }

  /* 
   Checks if assignments and oldAssignments include the same values and is identical.
     */

  checkIfPrevIsIdentical() {
    let equal =
      this.assignments.length == this.oldAssignments.length &&
      this.assignments.every(
        (element, index) => element === this.oldAssignments[index]
      )

    if (equal === true) {
      this.isPrevIdentical = true
    } else {
      this.isPrevIdentical = false
    }
  }

  /* 
   clears the assignments and take a copy and store it to the "oldAssignments".
     */

  clearAssignments() {
    this.oldAssignments = [...this.assignments] // copy of assignments
    this.assignments = [] // clear assignments
  }
}

module.exports = Centriod
