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
// checkUser = (user, pw) => {
//    let username = prompt('Username');
//    if (username != user) {
//       console.log('Cancled');
//    } else {
//       let passw = prompt('Password');
//       if ((username === user && passw === '') || passw == null) {
//          console.log('Đã huỷ');
//       } else if (username === user && passw != pw) {
//          console.log('Sai mật khẩu');
//       } else if (username === user && passw === pw) {
//          console.log('Chào mừng');
//       }
//    }
// };
// checkUser('Admin', 'mindX');

//! HW5
let myArr = [9, 100, 2, 50, 4, 100, 22, 34];
// a/ So chia het cho 2
myArr.forEach(function (element) {
   if (element % 2 == 0) {
      console.log(element);
   }
});
// b/ Tim cac so lon hon 7
let value = myArr.filter(function (value) {
   return value > 7;
});
console.log(value);
// c/ Tim cac so nho hon 5
let value2 = myArr.filter(function (x) {
   return x < 5;
});
console.log(value2);
// d/ Tim cac so nho hon 50 va nhan doi so dol len
myArr.map(function (number) {
   if (number < 50) console.log(number * 2);
});
