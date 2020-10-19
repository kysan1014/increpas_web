var student = {
	name: '이지우',
	age: 26,
	gender: '남',
	score: [85, 86, 96],
	work: function() {
		return this.name + "씨가 열심히 공부합니다.";
	}
}
var total = 0;
var getTotal = function(value) {
	total += value;
}
student.score.forEach(getTotal);
student.total = total;
/*
document.write('<h2><center>');
document.write('이름 : ' + student.name + '<br>')
document.write('나이 : ' + student.age + '<br>')
document.write('총점 : ' + total + '<br>')
document.write( student.work())
document.write('</center></h2>');
*/
function func01() {
	document.getElementById('name').innerHTML = student.name;
	document.getElementById('age').innerHTML = student.age;
	document.getElementById('gender').innerHTML = student.gender;
	document.getElementById('score').innerHTML = student.score;
	document.getElementById('total').innerHTML = student.total;
	document.getElementById('work').innerHTML = student.work();
}

total = 0;

var jiwoo = new Object();
jiwoo.name = '이지우';
jiwoo.age = 26;
jiwoo.gender = '남';
jiwoo.score = [85, 86, 96];
jiwoo.score.forEach(getTotal);
jiwoo.total = total;
jiwoo.work = function() {
	return this.name + "씨가 열심히 공부합니다.";
}

function func01() {
	document.getElementById('name').innerHTML = jiwoo.name;
	document.getElementById('age').innerHTML = jiwoo.age;
	document.getElementById('gender').innerHTML = jiwoo.gender;
	document.getElementById('score').innerHTML = jiwoo.score;
	document.getElementById('total').innerHTML = jiwoo.total;
	document.getElementById('work').innerHTML = jiwoo.work();
}