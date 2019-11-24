const errors = require(`restify-errors`)
const k_means = require('../model/stuff')

module.exports = server => {
  server.get(`/kmeans`, async (req, res, next) => {
    try {
      let k_meansData = k_means.kMeans()

      res.json(200, {
        message: `K-means clustering data`,
        kMeansData: k_meansData
      })
      next()
    } catch (err) {
      res.send(404, new errors.NotFoundError(err))
    }
  })
}
