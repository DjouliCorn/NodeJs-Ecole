import express from "express";
import { add, getAll, getByName, update, remove } from "./products.mjs";

const router = express.Router()

router.post('/products', function (req, res) {
    const { name, quantity } = req.body
    res.send(add(name, quantity));
});

router.get('/products', function (req, res) {
    req.body = JSON.stringify(getAll())
    res.send(req.body)
})

router.get('/products/:name', function (req, res) {
    const name = req.params.name
    req.body = JSON.stringify(getByName(name));
    res.send(req.body)
})

router.delete('/products/:name', function (req, res) {
    const name = req.params.name
    const quantity = req.query.quantity
    if (quantity) {
        res.send(remove(name, quantity))
    } else {
        res.send(remove(name, quantity));
    }

})

export default router;