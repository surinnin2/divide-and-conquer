function findFloor(arr, x, minIdx=0, maxIdx=(arr.length - 1)) {
    if (minIdx > maxIdx) {
        return -1
    }
    if (x >= arr[maxIdx]) {
        return arr[maxIdx]
    }

  let midIdx = Math.floor((minIdx + maxIdx) / 2)

  if (arr[midIdx] === x) {
      return arr[midIdx]
  }

  if (midIdx > 0 && arr[midIdx - 1] <= x && x < arr[midIdx]) {
      return arr[midIdx - 1]
  }

  if (x < arr[midIdx]) {
      return findFloor(arr, x, minIdx, midIdx-1)
  }

  return findFloor(arr, x, midIdx+1, maxIdx)
}

module.exports = findFloor