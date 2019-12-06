// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var aux = str.split(" ");
  for (let i = 0; i < aux.length; i++) {
    aux[i] = (aux[i].charAt(0).toUpperCase()).concat(aux[i].slice(1));
  }
  return aux.join(" ");
}

module.exports = capitalize;