"use strict"

module.exports = preprocessRangeMinimumQuery

var makeCartesianTree = require("cartesian-tree")
var preprocessLCA = require("least-common-ancestor")

function preprocessRangeMinimumQuery(array, compare) {
  var cartesianTree = makeCartesianTree(array, compare)
  var lca = preprocessLCA(cartesianTree.root)

  function rangeMinimumQuery(i, j) {
    if(i < 0) {
      i = 0
    }
    if((j <= i) || (i>=array.length)) {
      return -1
    }
    var a = cartesianTree.nodes[i]
    var b = cartesianTree.nodes[Math.min(array.length-1, j-1)]
    return lca(a,b).index
  }

  return rangeMinimumQuery
}