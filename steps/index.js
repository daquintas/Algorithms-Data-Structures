// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let aux = 0;
  let line = "";
  for (let i = 1; i <= n; i++) {
    while (aux < i) {
      line = line.concat("#");
      aux++;
    }
    while (aux < n) {
      line = line.concat(" ");
      aux++;
    }
    console.log(line);
    line = "";
    aux = 0;
  }
}

module.exports = steps;