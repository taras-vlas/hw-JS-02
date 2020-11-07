
const array = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const result = [];
const getItemsString = function(array) {
    'use strict';
    // Write code under this line
        const result = array;
        //  console.log('array', array);

        for (let i = 0; i < array.length; i += 1) {  //uvaga array!!!
        result.splice(i,1,`${i+1} - ${array[i]}\n`); 
        };
        //  console.log(`'${result.join('\n')} ${'\n'}'`);
          
        return (result.join(''));    //pripinyae vikonannya
                
  };
          
console.log( getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])); //peredaly znachennya
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

console.log( getItemsString([5, 10, 15])); //peredaly znachennya
/*
'1 - 5
2 - 10
3 - 15
'
*/