import { open } from 'node:fs/promises';
start()
async function start() {
	let sum = 0;
	const file = await open('./Day1/input.txt');
	for await (const line of file.readLines()) {
		var numbers = [...line.matchAll(/(?=(([0-9]|one|two|three|four|five|six|seven|eight|nine)))/g)]
		var firstString = numbers[0][1];
		var firstNum = !isNaN(parseInt(firstString)) ? firstString : readNumbersFromLetters(firstString);
		var lastString = numbers[numbers.length - 1][1]
		var lastNum = !isNaN(parseInt(lastString)) ? lastString : readNumbersFromLetters(lastString);
		var result = parseInt(`${firstNum}${lastNum}`);
		sum += result;
		// console.log(`line: ${line} - first: ${firstNum} - last: ${lastNum} - result: ${result}`)
	}
	console.log(`Sum: ${sum}`)
}

function readNumbersFromLetters(letters) {
	switch(letters) {
		case 'one':
			return 1;
		case 'two':
			return 2;
		case 'three':
			return 3;
		case 'four':
			return 4;
		case 'five':
			return 5;
		case 'six':
			return 6;
		case 'seven':
			return 7;
		case 'eight':
			return 8;
		case 'nine':
			return 9;
		default:
			return NaN;
	}
}