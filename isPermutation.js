module.exports = function (word1, word2) {
    const splitWord1 = word1.split("").sort().join()
    const splitWord2 = word2.split("").sort().join()
    console.log(splitWord1)
    console.log(splitWord2)
    return splitWord1 === splitWord2
}