// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  var length = str.length;
  var i = 0;
  var reverseString;

  for (length; 0 <= length; length--) {
    if (reverseString == null) {
      reverseString = str.charAt(length);
    } else {
      reverseString = reverseString + str.charAt(length);
    }
  }
  return reverseString;
}

module.exports = reverse;