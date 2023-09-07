const {sum, sub, mult, div} = require('../src/calculadora');

test('Para soma', ()=>{
    expect(sum(2,2)).toBe(4);
    expect(sum(5,1)).toBe(6);
    expect(sum(7,7)).toBe(14);
});

test('Para subtração', ()=>{
    expect(sub(7, 5)).toBe(2);
    expect(sub(1, 3)).toBe(-2);
    expect(sub(5, 5)).toBe(0);
})

test('Para multiplicação', ()=>{
    expect(mult(2, 2)).toBe(4);
    expect(mult(6, 1)).toBe(6);
    expect(mult(4, 5)).toBe(20);
})

test('Para divisão', ()=>{
    expect(div(4,2)).toBe(2);
    expect(div(9,9)).toBe(1);
    expect(div(7,4)).toBe(1.75);
})
