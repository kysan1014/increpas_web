/**
 * 
 */

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

document.write('<div class="w3-content w3-padding w3-center" style="max-width: 800px;">');
document.write('	<h1 class="w3-deep-orange padding">구 구 단</h1>');
document.write('	<div class="w3-col">');

for (var i = 2; i < 10; i++) {
	document.write('		<div class="w3-quarter w3-padding w3-col">');
	document.write('			<div class="w3-col w3-padding w3-border ' + color[i - 2] + '"><span id="' + i + 'dan"></span></div>');
	document.write('			<div class="w3-col w3-padding w3-border">');
	for (var j = 1; j < 10; j++) {
		document.write('				<div id="' + i + j + 'gap"></div>');
	}
	document.write('			</div>');
	document.write('		</div>');
}
document.write('	</div>');
document.write('</div>');


for (var i = 2; i < 10; i++) {
	document.getElementById(i + 'dan').innerText = i + '단';
	for (var j = 1; j < 10; j++) {
		document.getElementById('' + i + j + 'gap').innerText = i + ' * ' + j + ' = ' + i * j;
	}
}

/*
var div = document.querySelector('body > div.w3-content');
var list = div.classList;
list.add('novel');
list.forEach((x) => {
	document.write(x + '<br>');
});
*/
/*
var typeCheck = (x) => {
	if (Array.isArray(x)) {
		document.write('"' + x + '" is an array.<br>');
	} else {
		document.write('"' + x + '" is not an array.<br>');
	}
	
	document.write('Length of ' + x + ': ' + x.length + '<br>');
	var len = x.length;
	for (var i = 0; i < len; i++) {
		document.write('<br>')
		document.write(x.text);
		document.write('<br><br>')
	}
};

var htmlCollection = document.getElementsByTagName('div');
typeCheck(htmlCollection);
*/
