/**
 * encrypt task
 * @function encrypt
 * @param {string} src - Source file path
 * @param {string} dest - Destination file path
 * @param {string} key - Secret key string
 * @param {Object} [options={}] - Optional settings
 * @returns {function} encrypt task
 */
'use strict'
const encryptor = require('file-encryptor')
const { promisify } = require('util')
const encryptFileAsync = promisify(encryptor.encryptFile)
const { join } = require('path')

/** @lends encrypt */
function encrypt (src, dest, key, options = {}) {
  async function task (ctx) {
    const { cwd, logger } = ctx
    if (!key) {
      logger.error(`Secret key is required. Encrypt task skips.`)
      return
    }
    await encryptFileAsync(join(cwd, src), join(cwd, dest), key, options)
  }

  return Object.assign(task, {})
}

module.exports = encrypt
