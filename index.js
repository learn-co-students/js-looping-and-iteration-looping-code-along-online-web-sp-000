// Code your solutions in this file
// const cards = ["Ada", "Brendan", "Ali"];
// const event = "birthday"

function writeCards(cards, event) {
	let cardMessages = [];
	for (let i = 0; i < cards.length; i++) {
		cardMessages.push(
			`Thank you, ${cards[i]}, for the wonderful ${event} gift!`
		);
	}
	return cardMessages;
}

function countDown(number) {
	let countdown = number;
	while (countdown != -1) {
		console.log(countdown--);
	}
}
