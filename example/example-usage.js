'use strict'

const pon = require('pon')
const { encrypt, decrypt } = require('pon-task-file-encrypt')

;(async () => {
  let run = pon({
    encrypt: encrypt('secret.json', 'secret.json.enc', 'password123'),
    decrypt: decrypt('secret.json.enc', 'secret.json', 'password123')
  })

  run('encrypt')
}).catch((err) => console.error(err))
