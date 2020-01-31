// Code your solutions in this file
// js
// for (let age = 30;  age < 40;   age++) {
//   //initialization;  condition ; iteration
//   // let initial age = 30 , as long as age < 40 ; increase by 1
//   // print the age at each iteration
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const names = (["Anthony", "Amber", "Asia"], "blessed " )
// const event = ("event")

function writeCards( array, name ) {
  const new_names = []
  for (let i = 0; i < array.length; i++) {
    new_names.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
    // prints message to display
  }

  return new_names

}

function countDown(num) {
  // let i = 0;
   // because there is no array no index needed
  while( num > 0 ) {
    // while num is greater than zero
    // console.log num ,subtract by 1
    // finally leading to zero
    // when num = zero , breaks out of loop
    // console.log finally zero 
    console.log (num);
    num -= 1
  }
  console.log(num)
}
