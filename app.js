//! HW1
// let result;
// let age = 20;
// function checkAge(age) {
//    result = age > 18 ? true : false;
//    return result;
// }
// checkAge(age);
// if (result == true) console.log(true);
// else confirm('Did parent allow you?');

//! HW2
// let result;
// function min(a, b) {
//    result = a > b ? b : a;
//    return result;
// }
// console.log(min(15, 20));

//! HW3
// ask = (question, yes, no) => {
//    if (confirm(question)) yes();
//    else no();
// };
// ask(
//    'Do you agree?',
//    () => alert('You agreed.'),
//    () => alert('You cancled the execution.')
// );

//! HW4
checkUser = (user, pw) => {
   let username = prompt('Username');
   if (username != user) {
      console.log('Cancled');
   } else {
      let passw = prompt('Password');
      if ((username === user && passw === '') || passw == null) {
         console.log('Đã huỷ');
      } else if (username === user && passw != pw) {
         console.log('Sai mật khẩu');
      } else if (username === user && passw === pw) {
         console.log('Chào mừng');
      }
   }
};
checkUser('Admin', 'mindX');
