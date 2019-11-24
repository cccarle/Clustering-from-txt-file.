import React, { Component } from 'react'
import TreeView from 'react-simple-jstree'

export default class Tree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        core: {
          data: [
            {
              text: 'Cluster 1',
              children: [{ text: 'Child node 1' }, { text: 'Child node 2' }]
            },
            {
              text: 'Cluster 2',
              children: [{ text: 'Child node 1' }, { text: 'Child node 2' }]
            },
            {
              text: 'Cluster 3',
              children: [{ text: 'Child node 1' }, { text: 'Child node 2' }]
            },
            {
              text: 'Cluster 4',
              children: [{ text: 'Child node 1' }, { text: 'Child node 2' }]
            },
            {
              text: 'Cluster 5',
              children: [{ text: 'Child node 1' }, { text: 'Child node 2' }]
            }
          ]
        }
      },
      selected: []
    }
  }

  handleChange(e, data) {
    this.setState({
      selected: data.selected
    })
  }

  render() {
    let treeStructureData = []

    this.props.kmeansData.forEach(centroids => {
      let childrens = []

      centroids.assignments.forEach(blog => {
        childrens.push({ text: blog.title })
      })

      let lengtOfCentroid = centroids.assignments.length.toString()

      treeStructureData.push({
        text:
          'Cluster ' +
          (centroids.index + 1).toString() +
          ' (' +
          lengtOfCentroid +
          ')',
        children: childrens
      })
    })

    const kmeansData = {
      core: {
        data: treeStructureData
      }
    }

    let data = kmeansData

    return (
      <div>
        <br />

        <TreeView
          treeData={data}
          //onChange={(e, data) => this.handleChange(e, data)}
        />
        <br />
      </div>
    )
  }
}
