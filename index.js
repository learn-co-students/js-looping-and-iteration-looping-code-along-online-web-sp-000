// Code your solutions in this file

function writeCards(name, eventName)
{
    for(const i = 0; i < name.lenth; i++)
    {
        console.log(`Thank you, ${name[i]}, for the wonderful ${eventName}!`);
    }
}

function countDown(integer)
{
    while(integer >= 0)
    {
        console.log(integer);
        integer --;
    }
}