/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */
const fnA = function () {
    console.log('Выполняется функция A');
  };
  
  const fnB = function () {
    console.log('Выполняется функция B');
  };
  
  const fnC = function () {
    console.log('Выполняется функция C');
  };
  
  // console.log('Лог перед вызовом функции A');
  fnA();
  // console.log('Лог после вызова функции A');
  
  // console.log('Лог перед вызовом функции B');
  fnB();
  // console.log('Лог после вызова функции B');
  
  // console.log('Лог перед вызовом функции C');
  fnC();
  // console.log('Лог после вызова функции C');