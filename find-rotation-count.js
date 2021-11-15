function findRotationCount(arr) {
  const start = Math.min(...arr)
  const startIndex = arr.findIndex(arrItem => arrItem === start)

  return startIndex
}

module.exports = findRotationCount