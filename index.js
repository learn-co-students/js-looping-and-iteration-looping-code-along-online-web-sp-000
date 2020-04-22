// Code your solutions in this file
function writeCards(names, gift_type) {
	let cards = []
	let i = 0;
	while (i < names.length) {
		cards.push(`Thank you, ${names[i]}, for the wonderful ${gift_type} gift!`);
		i++
	}
	return cards;
}

function countDown(integer) {
	while (integer >= 0) {
		console.log(integer);
		integer--
	}
}

