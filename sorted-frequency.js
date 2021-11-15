function sortedFrequency(arr, num) {
    const firstOccurence = arr.findIndex(arrItem => arrItem === num)
    const lastOccurence = arr.lastIndexOf(num) + 1

    if (firstOccurence === -1) {
        return -1
    } else if (firstOccurence === lastOccurence) {
        return 1
    }

    return lastOccurence - firstOccurence
}

module.exports = sortedFrequency