/*
$(document).ready(() => {
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

	$('.w3-button').each(function(index) {
		$(this).text(color[index].substr(3));
		$(this).addClass(color[index]);
	});

	$('.w3-button').on('click', function() {
		var index = $('.w3-button').index($(this));
		$('#color-panel').attr('class', color[index]);
	});

});
*/

var imgName = [
	'img1.jpg',
	'img2.jpg',
	'img3.jpg',
	'img4.jpg',
	'img5.jpg',
	'img6.jpg',
	'img7.jpg',
	'img8.jpg'
];

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

document.getElementById('color-panel').style.overflow = 'hidden';
var btns = document.getElementsByClassName('w3-button');

for (var i = 0; i < btns.length; i++) {
	var colorName = color[i];
	btns[i].innerText = color[i].substr(3);
	btns[i].classList.add(color[i]);

	btns[i].onclick = function() {
		document.getElementById('color-panel').setAttribute("class", 'w3-' + this.innerText);
	};
}
