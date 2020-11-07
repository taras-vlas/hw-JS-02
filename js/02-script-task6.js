function mapArray(array) {
    'use strict';
    const numbers = new Array(array.length); //new Array() создаст пустой массив []
    for(let i = 0; i < array.length; i += 1) {
      // Write code under this line
      const newArray = array.slice(); // метод .slice()  для створення копії масива
        //   console.log(newArray);
      numbers[i] = newArray[i] * 10; 
        //   console.log(numbers);
    }
    return numbers;
  }
  
  console.log(mapArray([-2, 0, 2]));
  // [-20, 0, 20]
  
  console.log(mapArray([-2.5, 0, 2.5]));
  // [-25, 0, 25]