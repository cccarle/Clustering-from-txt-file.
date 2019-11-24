import React, { useEffect, useState } from 'react'
import { fetchKmeansData } from './actions'
import TreeView from './components/tree'
import './App.css'

function App() {
  const [kMeansData, setKmeansData] = useState([])

  useEffect(() => {
    getKmeans()
  }, [])

  async function getKmeans() {
    let centroids = await fetchKmeansData()
    setKmeansData(centroids)
  }

  return (
    <div className="App">
      <h1>Clustering</h1>
      <TreeView kmeansData={kMeansData} />
    </div>
  )
}

export default App
