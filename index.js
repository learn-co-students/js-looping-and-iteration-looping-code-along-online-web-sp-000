// Code your solutions in this file
function writeCards(_names, _event) {
  const name_array = [];
  for (let i = 0; i < _names.length; i++) {
    name_array.push(`Thank you, ${_names[i]}, for the wonderful ${_event} gift!`);    
  }
  return name_array;
}


function countDown(_num) {
  while (_num > -1) {
    console.log(_num--)
  }
}