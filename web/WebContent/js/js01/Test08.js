/**
 * 
 */

document.getElementById("test").innerText = "여기는 #test";
document.getElementsByClassName('test')[0].innerHTML = '여기는 .test';
document.getElementsByName('test')[0].innerHTML = '여기는 name이 test'
document.querySelectorAll('p.t3')[0].innerHTML = "<strong>여기는 p.t3</strong>"
//document.querySelectorAll('p.t3')[0].innerText = "<strong>여기는 p.t3</strong>"

document.getElementsByName("id")[0].value = 'jiwoo';


document.getElementById('btn').onclick = function() {
	var sid = document.getElementById('id').value;
	console.log(sid);
	document.getElementById('jiwoo').innerText = sid;
};