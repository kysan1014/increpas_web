var arr = new Array();

for (var i = 0; i < 100; i++) {
	arr[i] = i + 1;
}

for (var i = 0; i < 100; i++) {
	document.write(arr[i] + ', ');
}

document.write('<br><br>');

for (var i = 0; i < 100; i++) {
	if (i % 2 != 0) {
		continue;
	}
	arr[i] = 0;
}

for (var i = 0; i < 100; i++) {
	document.write(arr[i] + ', ');
	if ((i + 1) % 10 == 0) {
		document.write('<br>');
	}
}

document.write('<br>');

document.write('<hr>');
var arr= ['이지우', '장성환', '오혜찬'];

document.write(arr.join());
document.write('<br>')
document.write(arr.join('/'));

document.write('<hr>');

document.write('<br>');

var stud = ['윤요셉', '유병욱'];
document.write(arr.concat(stud));

document.write('<br>');

document.write(arr.concat(stud).join('/'));

document.write("<hr>");

arr = arr.concat('박진우', '김영선');
arr.sort();
document.write(arr);
document.write('<br>');
document.write(arr.reverse())