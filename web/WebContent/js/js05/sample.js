var uri = decodeURIComponent(location.href);
console.log(uri);
console.log(encodeURIComponent(uri));

var func01 = function() {

	var str =
		'<div class="w3-content w3-center mw650">' +
		'	<h2 class="w3-deep-purple w3-padding w3-card-4 w3-padding">데이터를 sample.html로 전송</h2>' +
		'	<div class="w3-col w3-padding w3-card-4 w3-margin-top">' +
		'		<div class="w3-col"><h4 class="w3-text-gray">이름 : <span id="tname"></span></h4></div>' +
		'		<div class="w3-col"><h4 class="w3-text-gray">나이 : <span id="tage"></span></h4></div>' +
		'		<div class="w3-col"><h4 class="w3-text-gray">전화 : <span id="ttel"></span></h4></div>' +
		'		<div class="w3-col"><h4 class="w3-text-gray">메일 : <span id="tmail"></span></h4></div>' +
		'		<div class="w3-col"><h4 class="w3-text-gray">성별 : <span id="tgen"></span></h4></div>' +
		'	</div>' +
		'</div>';
	document.body.innerHTML = str;

	setData2();
}

var setData = function() {

	var data = location.search;
	var param = new URLSearchParams(data);
	document.getElementById('tname').innerText = param.get('name');
	document.getElementById('tage').innerText = param.get('age');
	document.getElementById('ttel').innerText = param.get('tel');
	document.getElementById('tmail').innerText = param.get('mail');
	var gen = param.get('gen');
	if (gen === 'M') gen = '남자';
	if (gen === 'F') gen = '여자';
	if (gen === 'O') gen = '선택하지않음';
	document.getElementById('tgen').innerText = gen;

}

var setData2 = function() {

	//alert('location.href : \n\n' + decodeURIComponent(location.href));
	var data = decodeURIComponent(location.search);
	//alert(data);
	data = data.substring(1);
	//alert(data);
	var arr = data.split('&');
	alert(arr);

	var paradata = {};

	for (var i = 0; i < arr.length; i++) {
		let key = arr[i].substring(0, arr[i].indexOf('='));
		let val = arr[i].substring(arr[i].indexOf('=') + 1);
		paradata[key] = val;
	}
	
	document.getElementById('tname').innerText = paradata['name'];
	document.getElementById('tage').innerText = paradata['age'];
	document.getElementById('ttel').innerText = paradata['tel'];
	document.getElementById('tmail').innerText = paradata['mail'];
	document.getElementById('tgen').innerText = paradata['gen'];
}