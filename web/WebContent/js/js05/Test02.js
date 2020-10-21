
document.getElementById('btn1').onclick = () => {

	//1 
	var sinput = document.querySelectorAll('h4 > span');
	var url = './sample.html?';
	for (var i = 0; i < sinput.length; i++) {
		if (!sinput[i]) {
			alert('Please fill all the data in');
			return;
		}
		if (i != 0) url += '&'
		url += sinput[i].getAttribute('id').substring(1) + '=' + sinput[i].innerHTML;
	}
	url += '&' + document.getElementById('tgen').getAttribute('id').substring(1) + '=' + document.getElementById('tgen').value;
	location.href = url;

}

document.getElementById('btn2').onclick = () => {

	//2
	var sinput = document.querySelectorAll('h4 > span');
	var sdata = document.frm.children;
	for (var i = 0; i < sinput.length; i++) {
		if (!sinput[i]) {
			alert('Please fill all the data in');
			return;
		}
		sdata[i].value = sinput[i].innerHTML;
	}
	sdata[sdata.length - 1].value = document.getElementById('tgen').value;
	document.frm.submit();

}