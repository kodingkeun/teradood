const path = require("node:path")

module.exports = {
    doods: require(path.resolve("lib/dood")).doods,
    terabox: require(path.resolve("lib/terabox")).terabox,
}