/**
 * ["foo","bar","baz","qux","echo"]
 *
 * modificar a mayúscula el primer caracter de cada item string del array
 *
 *
 * output => ["Foo","Bar","Baz","Qux","Echo"]
 */
let arr = ["foo", "bar", "baz", "qux", "echo"];
let result = [];

const primeraletra = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

for (let i = 0; i < arr.length; i++) {
  result.push(primeraletra(arr[i]));
}
console.log(result);
//export result
module.exports = result;
