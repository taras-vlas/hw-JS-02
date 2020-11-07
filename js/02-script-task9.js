
function isLoginValid (login, min = 4, max = 16) {
    // Write code under this line

      if (login.length < min || login.length > max) {
          //console.log(`!a: login.length: ${login.length}, login: ${login}`);
      //    message = ERROR;
      return false;
      } else
          //console.log(`a: login.length: ${login.length}, login: ${login}`);
      return true;
}


function isLoginUnique (allLogins, login) {
    'use strict';
    // Write code under this line

        if(allLogins.includes(login)) {
            //console.log(`b: allLogins.includes(login) найден: ${login}`);
        //message = REFUSAL; 
        return false;
        } else  
            //console.log(`!b: allLogins.includes(login) не найден: ${login}`);
        return true;            
}


function addLogin (allLogins, login) {
    'use strict';
    const SUCCESS = 'Логин успешно добавлен!';
    const REFUSAL = 'Такой логин уже используется!';
    const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
    let message;
    // Write code under this line    

  //Предикатна (true,false) функція початок з is:  
  if (isLoginValid (login) === true
     && isLoginUnique(allLogins, login) === true) {
      allLogins.push(login);
          //console.log(`c: allLogins.push(login):  ${allLogins}`);
    return SUCCESS;
    } else 
        if (isLoginValid (login) === false) {
        return ERROR;    
        } else
            return REFUSAL;       
  }

  const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123', '1234', '12345'];
  
  console.log(addLogin(logins, 'Ajax')); 
  // 'Логин успешно добавлен!'
  
  console.log(addLogin(logins, 'robotGoogles')); 
  // 'Такой логин уже используется!'
  
  console.log(addLogin(logins, 'Zod'));
  // 'Ошибка! Логин должен быть от 4 до 16 символов'
  
  console.log(addLogin(logins, 'jqueryisextremelyfast')); 
  // 'Ошибка! Логин должен быть от 4 до 16 символов' 

console.log(addLogin(logins, '1234'));
console.log(addLogin(logins, '4444'));