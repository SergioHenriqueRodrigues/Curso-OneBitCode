//NORMAL
function normalSum(a, b){
  return a + b
}
console.log(`Soma normal: ${normalSum(2, 2)}`)

//ANONIMA
const anonymousSum = function (a,b){
  return a + b
}
console.log(`Soma anonima: ${anonymousSum(2, 2)}`)

//ARROW
const arrowSum = (a, b) => {
  return a + b 
}
console.log(`Soma arrow: ${arrowSum(2, 2)}`)

//ARROW SUBTRACT
const subtract = (a,b) => a - b
console.log(`Subtração arrow: ${subtract(5, 2)}`)

//ARROW
const double = n => `O dobro de ${n} é ${n * 2}`
const number = 21
console.log(double(number))

//SEARCH WITH P - ARROW FUNCTION
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)