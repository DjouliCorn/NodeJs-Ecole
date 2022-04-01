import express from 'express'
import { add, getAll, getByName, remove } from './products.mjs'
import { auth } from './auth/index.mjs'

const router = express.Router()

router.post('/auth', function (req, res) {
  const { name, password } = req.body
  res.send(auth(name, password))
})

router.post('/products', function (req, res) {
  const { name, quantity } = req.body
  res.send(add(name, quantity))
})

router.get('/products', function (req, res) {
  req.body = JSON.stringify(getAll())
  res.send(req.body)
})

router.get('/products/:name', function (req, res) {
  const name = req.params.name
  req.body = JSON.stringify(getByName(name))
  res.send(req.body)
})

router.delete('/products/:name', function (req, res) {
  const name = req.params.name
  const quantity = req.query.quantity
  if (quantity) {
    res.send(remove(name, quantity))
  } else {
    res.send(remove(name, quantity))
  }
})

export default router
