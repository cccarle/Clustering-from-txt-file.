import variabels from '../config/variabels'
const axios = require('axios')

export const fetchKmeansData = async () => {
  return await axios
    .get(`${variabels.url}/kmeans`)
    .then(response => {
      if (response.status === 200) {
        let kmeans = response.data.kMeansData
        return kmeans
      }
    })
    .catch(error => {
      return 'Something went wrong when GET on users:  ' + error
    })
}
