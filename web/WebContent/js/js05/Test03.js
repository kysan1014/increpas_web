
document.getElementById('sel').onchange = () => {
	var data = document.frm.sel.value;
	var idx = document.frm.sel.selectedIndex;
	console.log(idx + ' : ' + data);
}

document.getElementById('btn').onclick = () => {
	var idx = parseInt(prompt('0 ~ 6 사이의 번호 입력'));
	document.frm.sel.selectedIndex = idx;
}

var d1 = new Date();
console.log(d1);
var str = d1.getFullYear() + '년 ' +
			(d1.getMonth() + 1) + '월 ' +
			d1.getDate() + '일 ' + 
			d1.getHours() + '시간 ' +
			d1.getMinutes() + '분 ' + 
			d1.getSeconds() + '초 ' +
			d1.getMilliseconds() + '밀리초';
document.getElementById('time').innerText = str;