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
const {access} = require('fs')
const { promisify } = require('util')
const decryptFileAsync = promisify(encryptor.decryptFile)
const existsAsync = (path) => new Promise((resolve, reject) => {
  access(path, (err) => err ? resolve(false) : resolve(true))
})
const { join } = require('path')

/** @lends decrypt */
function decrypt (src, dest, key, options = {}) {
  const {
    force = false
  } = options
  async function task (ctx) {
    const { cwd, logger } = ctx
    if (!key) {
      logger.error(`Secret key is required. Decrypt task skips.`)
      return
    }
    let destExists = await existsAsync(join(cwd, dest))
    if (destExists && !force) {
      return
    }
    await decryptFileAsync(join(cwd, src), join(cwd, dest), key, options)
    logger.debug(`File decrypted: ${src} -> ${dest}`)
  }

  return Object.assign(task, {})
}

module.exports = decrypt
