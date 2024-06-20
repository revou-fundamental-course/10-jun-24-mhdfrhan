document.getElementById('temperature-form').addEventListener('submit', function (event) {
	event.preventDefault();

	const celsius = parseFloat(document.getElementById('celsius').value);
	const fahrenheit = (celsius * 9/5) + 32;

	document.getElementById('conversion-result').innerText = `Fahrenheit: ${fahrenheit.toFixed(1)}`;
	document.getElementById('calculation-explanation').innerText = `Celsius (${celsius}) x 9/5 + 32 = Fahrenheit (${fahrenheit.toFixed(1)})`;
});

document.getElementById('temperature-form').addEventListener('reset', function () {
	document.getElementById('result').innerHTML = '';
});