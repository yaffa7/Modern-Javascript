let val

// Number to string

val = String(5)
console.log(val);
console.log(typeof val);
console.log(val.length);

val2 = String(4+4)

console.log(val2);
console.log(typeof val2);
console.log(val2.length);

// Bool to string
val3 = String(true)

console.log(val3);
console.log(typeof val3);
console.log(val3.length);

// Date to string
val4 = String(new Date())

console.log(val4);
console.log(typeof val4);
console.log(val.length4);

// Array to string
val5 = String(['one', 'two', 'three'])

console.log(val5);
console.log(typeof val5);
console.log(val5.length);

// toString()
val6 = (5).toString()

console.log(val6);
console.log(typeof val6);
console.log(val6.length);


// String to Number
console.log(Number('5'))
console.log(Number(true))
console.log(Number(false))
console.log(Number(null));
console.log(Number('hello'));
console.log(Number([1,2,3]));

console.log(parseInt('100.30'))
console.log(parseFloat('100.30'))
console.log(parseFloat('100.30').toFixed())
console.log(parseFloat('100.30').toFixed(2))

// Type coersion
const val7 = 5
const val8 = '6'
const sum = val7 + val8
console.log(sum);
console.log(typeof sum);


const sum2 = Number(val7 + val8)
console.log(sum2);
console.log(typeof sum2);