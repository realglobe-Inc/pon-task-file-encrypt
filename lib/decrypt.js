/**
 * decrypt task
 * @function decrypt
 * @param {string} src - Source file path
 * @param {string} dest - Destination file path
 * @param {string} key - Secret key string
 * @param {Object} [options={}] - Optional settings
 * @returns {function} decrypt task
 */
'use strict'
const encryptor = require('file-encryptor')
const { promisify } = require('util')
const decryptFileAsync = promisify(encryptor.decryptFile)
const { join } = require('path')

/** @lends decrypt */
function decrypt (src, dest, key, options = {}) {
  async function task (ctx) {
    const { cwd } = ctx
    await decryptFileAsync(join(cwd, src), join(cwd, dest), key, options)
  }

  return Object.assign(task, {})
}

module.exports = decrypt
