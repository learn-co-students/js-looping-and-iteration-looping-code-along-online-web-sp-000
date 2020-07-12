function writeCards(names, occasion) {
	let cards = []
	let i = 0;
	while (i < names.length) {
		cards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
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
