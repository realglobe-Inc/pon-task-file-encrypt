/**
 * Test case for define.
 * Runs with mocha.
 */
'use strict'

const define = require('../lib/define.js')
const ponContext = require('pon-context')
const { ok } = require('assert')
const { basename } = require('path')

describe('define', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Define', async () => {
    let ctx = ponContext()
    let { encrypt, decrypt } = define
    const SECRET_KEY = 'aaa'
    const filename = basename(__filename)
    let encryptTask = encrypt(`test/${filename}`, `tmp/${filename}.enc`, SECRET_KEY)
    await encryptTask(ctx)

    let decryptTask = decrypt(`tmp/${filename}.enc`, `tmp/${filename}`, SECRET_KEY)
    await decryptTask(ctx)
  })
})

/* global describe, before, after, it */
