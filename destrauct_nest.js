let data                  = { a: 'a', b: { c: 1, d: 2 } };
let { a, b, b: { c, d } } = data;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let { defalut = 'defalut', foo } = { foo: 'ok' };

console.log(defalut);