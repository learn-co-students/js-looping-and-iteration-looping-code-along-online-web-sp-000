// Code your solutions in this file


  function writeCards(name, event) {
      let message = []
      for (let i = 0; i < name.length; i++){
          message[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`

      }
      return message
  }

  function countDown(number) {
      for (let i = 0; i <= number; i +=1 ){
          console.log(number - i)
      }
  }