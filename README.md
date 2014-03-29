range-minimum-query
===================
Given an array of elements, preprocess the array so that range minimum queries can be computed in constant time.


# Example

```javascript
var array = [9, 3, 7, 1, 8, 12, 10, 20, 15, 18, 5]
var rmq = require("range-minimum-query")(array)

console.log(rmq(-Infinity, Infinity), rmq(0, 3))
```

Output:

```javascript
3 1
```

# Install

```
npm install range-minimum-query
```

# API

### `var rmq = require("range-minimum-query")(array[,compare])`
Preprocess `array` for fast range minimum queries

* `array` is an array of objects
* `compare` is an optional comparison function determining an ordering on `array`

**Returns** A function `rmq` for answering range minimum queries on `array`

### `rmq(lo, hi)`
Finds the index of the smallest element in the range `[lo,hi)` in `array`

* `lo` is the start index of the bounds
* `hi` is the end index of the bounds (non-inclusive)

**Returns** The index of the smallest element in the range `[lo, hi)` in `array`

# Credits
(c) 2014 Mikola Lysenko. MIT License