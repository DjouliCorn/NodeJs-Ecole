import { add, substract, multiply } from "./calc.mjs"

test('add properly', () => {
    expect(add(5, 5)).toBe(10);
})

test('substract properly', () => {
    expect(substract(7, 3)).toBe(4);
})

test('multiply properly', () => {
    expect(multiply(5, 5)).toBe(25);
})