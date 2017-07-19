'use strict'

const pon = require('pon')
const ponTaskFileEncrypt = require('pon-task-file-encrypt')

;(async () => {
  let run = pon({
    myTask01: ponTaskFileEncrypt()
  })

  run('myTask01')
}).catch((err) => console.error(err))
