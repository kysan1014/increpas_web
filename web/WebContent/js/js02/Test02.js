/**
 * 
 */

var setup = () => {
	var color = [
		'w3-red',
		'w3-pink',
		'w3-purple',
		'w3-deep-purple',
		'w3-indigo',
		'w3-blue',
		'w3-aqua',
		'w3-teal'
	];

	for (var i = 0; i < 8; i++) {
		var div = document.createElement('div');
		div.className = 'w3-quarter w3-padding w3-col';
		var dan = document.createElement('div');
		dan.className = 'dan w3-col w3-padding ' + color[i];
		var content = document.createElement('div');
		content.className = 'content w3-col w3-padding w3-border';

		div.appendChild(dan);
		div.appendChild(content);

		$('div.w3-content').append(div);
	}
};

var getGoogooStr = (i) => {
	var str = '';
	for (var j = 1; j < 10; j++)
		str += i + " * " + j + " = " + i * j + "\n";
	return str; 
};

var fillData = () => {
	$('div.w3-quarter').each((i, div) => {
		var dan = i + 2;
		div.firstChild.innerText = dan + "단";
		div.lastChild.innerText = getGoogooStr(dan);
	});
};

$(document).ready(() => {
	setup();
	fillData();
});

