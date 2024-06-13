/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result
 *
 *
 *  output => [5,4,3,2,1]
 */
let result = [];
let i = 1;
while (i <= 5) {
  result.push(i);
  i++;
}
result.reverse();

//export result
module.exports = result;
