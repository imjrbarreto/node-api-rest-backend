const express = require('express')
const UsersService = require('./../services/users.service')

const router = express.Router()
const service = new UsersService()

router.get('/', (req, res) => {
  const users = service.find()
  res.json(users)
  // const { limit, offset } = req.query
  // if (limit && offset) {
  //   res.json({
  //     limit,
  //     offset
  //   })
  // } else {
  //   res.send('No hay parametros')
  // }
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const user = service.findOne(id)
  res.json(user)
})

router.post('/', (req, res) => {
  const body = req.body
  const newUser = service.create(body)
  res.json(newUser)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const user = service.update(id, body)
  res.json(user)
  // res.json({
  //   message: 'update',
  //   data: body,
  //   id
  // })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const user = service.delete(id)
  res.json(user)
})

module.exports = router
