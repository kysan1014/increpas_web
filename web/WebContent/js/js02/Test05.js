var func01 = function(){
	alert('btn1 버튼 클릭!');
}

// document.getElementById('btn1').onclick = func01;
document.getElementById('btn1').onclick = function(){
	alert('btn1 버튼 클릭!');
};

document.getElementById('btn2').onclick = function(){
	var sfile = document.getElementById('file').value;
	alert('선택된 파일 : ' + sfile);
};

var btn3 = document.getElementById('btn3');
btn3.onclick = function() {
	var sid = document.getElementById('id').value;
	btn3.innerHTML = sid;
};