var a = 0;
	b = 45;
	value = (a * a) - (2 * a * b) + (b * b);

console.log(value);

if (value > 0) {
	console.log('Wynik dodatni!');
} else if (value < 0) {
	console.log('Wynik ujemny!');
} 
/*else {
console.log('Zero');
} */

var isItZero = value == 0 ? 'Zero!' : 'Oj, to nie zero!';
console.log(isItZero);