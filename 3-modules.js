// __dirname - path to current directory
// __filename - file name
// require - function to use modules (common JS)
// module - info about current modules (file)
// process - info about env where the program is being executed


// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)