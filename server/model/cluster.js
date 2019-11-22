class Cluster {
  constructor(left = null, right = null, blog = null, distance = 0) {
    this.left = left
    this.right = right
    this.blog = blog
    this.distance = distance
  }

  getCluster() {
    return (
      'Left: ' +
      this.left +
      ' Right: ' +
      this.right +
      ' Blog: ' +
      this.blog +
      ' Distance: ' +
      this.distance
    )
  }
}

module.exports = Cluster
