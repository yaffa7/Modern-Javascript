
console.log(new Date());

console.log(new Date('9-10-1981 11:25:012'));
console.log(new Date('September 10 1981'));
console.log(new Date('9/10/1981'));
console.log(new Date('8-10-1981 11:25:012').getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getFullYear());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getTime());


let birthday = new Date('September 10 1981')
birthday.setMonth(1)
birthday.setDate(12)
birthday.setFullYear(1985)
birthday.setHours(3)
birthday.setMinutes(30)
birthday.setSeconds(25)


console.log(birthday);
