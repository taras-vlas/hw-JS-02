// bezkinechny cicl vvoda chisla
// null - zupynyty
//

let total = 0;

// do {
//     let input = prompt ('введи число');

//     if (input === null) {
//         break;
//     }
  
//             input = Number(input);
//             total += input;
//            console.log(`input ${input}`);

//} while (true);  // 5 > 3

while (true) {     // pracyue tak samo z   while 
    let input = prompt ('введи число');

    if (input === null) {
        console.log('vidmineno koristuvachem');
        break;
    }
  
            input = Number(input);  // Number.isNaN('qwer');
                const notANumber = Number.isNaN(input); //true
                if (notANumber) {
                    console.log('Vvedeno ne chislo, propuskaemo iteraciyu');   
                    continue; // perehid na while
                }
            total += input;
//            console.log(`input ${input}`);
} 

console.log(`summa ${total}`);


//               variant  ...takoe
// let input;
// do {
//     input = prompt ('введи число #');
// } while (input !== null);