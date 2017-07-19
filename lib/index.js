/**
 * Pon task to encrypt a file
 * @module pon-task-file-encrypt
 * @version 3.0.1
 */

'use strict'

const define = require('./define')

let lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
