"use strict"

var tape = require("tape")
var preprocessRMQ = require("../rmq.js")

tape("range-minimum-query", function(t) {

  function verifyRMQ(array, rmq, compare) {
    function bruteForceRMQ(i,j) {
      i = Math.max(i, 0)
      j = Math.min(j, array.length)
      var idx = -1
      for(var k=i; k<j; ++k) {
        if(idx < 0) {
          idx = k
          continue
        }
        if(compare(array[idx], array[k]) > 0) {
          idx = k
        }
      }
      return idx
    }
    for(var i=0; i<array.length; ++i) {
      for(var j=0; j<=array.length; ++j) {
        t.equals(rmq(i,j), bruteForceRMQ(i,j), "range: [" + i + "," + j + ")")
      }
    }
    t.equals(rmq(1, 0), -1, "checking inverted ranges")
    t.equals(rmq(array.length, 10), -1, "inverted ranges again")
    t.equals(rmq(-10,-1), -1, "negative ranges")
    if(array.length>0) {
      t.equals(rmq(-Infinity, Infinity), bruteForceRMQ(0, array.length), "whole array")
      t.equals(rmq(-1, 1), 0, "negative range")
    }
  }

  function verify(array) {
    verifyRMQ(array, preprocessRMQ(array), function(i,j) {
      return i-j
    })
    var objects = array.map(function(num) {
      var obj = { value: num, self: null }
      obj.self = obj
      return obj
    })
    var compare = function(a,b) {
      return a.value-b.value
    }
    verifyRMQ(array, preprocessRMQ(array, compare), compare)
  }

  verify([9, 3, 7, 1, 8, 12, 10, 20, 15, 18, 5])
  verify([1])
  verify([])


  t.end()
})