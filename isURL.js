module.exports = function (string) {
    const removeSpace = string.replace(/\s/g, '%20')
    return removeSpace
}