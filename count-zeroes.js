function countZeroes(arr) {
  const firstOccurence = arr.findIndex(arrItem => arrItem === 0)

  if (firstOccurence === -1) {
    return 0
  }

  return arr.length - firstOccurence
}

module.exports = countZeroes