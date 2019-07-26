function writeCards(names, event) {
    let thankYouArray = []
    for ( let i = 0; i < names.length; i++ ) {
      thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouArray
  }
  
  function countdown(count) {
    while (count >= 0) {
      console.log(count)
      count -= 1
    }
  }