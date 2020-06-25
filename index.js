// Code your solutions in this file
function countDown(num){
  
  let counter=num;
  while(counter >= 0){
   
     console.log(counter)
  
        counter= counter-1;
     
  }
}
 function writeCards(str,event){
   
   let final= str.length-1;
   let text=[];
   for(let count=0;count<=final; count+=1){
     text.push(`Thank you, ${str[count]}, for the wonderful ${event} gift!`)
     
   }
   return text;
 }