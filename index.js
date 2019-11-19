// Code your solutions in this file

function writeCards(name, eventName)
{
    let i = 0;

    while (i < name.length)
    {
        console.log(`Thank You, ${name[i]}, for the wonderful ${eventName}!`);
        i++;
    }

    return name;
}

function countDown(integer)
{
    while(integer >= 0)
    {
        console.log(integer);
        integer --;
    }
}