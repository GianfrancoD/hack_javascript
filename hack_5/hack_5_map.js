/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result
 *
 *
 * output => [7,5,3,1]
 */
let result = Array.from({ length: 4 }, (_, v) => 7 - 2 * v);

console.log(result);
//export result
module.exports = result;
