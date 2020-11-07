
function findLongestWord (string = "") { 
// Write code under this line
      //console.log('string:', string );
    
      const words = string.split(' ');
      console.log('words:',words);
      
      let largestWord = "";
      let largestLengthWord = 0;
      for (let i = 0; i < words.length; i += 1) {
          if (words[i].length > largestLengthWord) {
              largestLengthWord = words[i].length;
              largestWord = words[i];
          }
      
      //for (const word of words) {
      //console.log(word);  
      //console.log('word.length:', word.length);
            
      }
  return largestWord;
}

console.log(findLongestWord(''));
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'