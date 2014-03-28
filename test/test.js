"use strict"

var tape = require("tape")
var preprocessRMQ = require("../rmq.js")

tape("range-minimum-query", function(t) {

  function verify(array) {

    //TODO: Run tests
  }

  verify([9, 3, 7, 1, 8, 12, 10, 20, 15, 18, 5])
  verify([1])
  verify([])

  t.end()
})