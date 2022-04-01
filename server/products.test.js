import { getAll } from "./products.mjs"
import products from "./products.json"

test('get all products', () => {
    expect(getAll()).toMatchObject(products);
})