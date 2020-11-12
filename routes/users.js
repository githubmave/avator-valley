const express = require('express')

const db = require('../db')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// router.get('/', (req, res) => {
//   db.getAuthors
//     .then(authors => {
//       res.render('index', {authors: authors})
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })



