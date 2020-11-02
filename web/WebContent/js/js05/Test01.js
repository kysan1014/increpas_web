function func01() {
	document.getElementById('submit').onclick = () => {
/*
		var sname = document.getElementById('tname').value;
		var sage = document.getElementById('tage').value;
		var sgen = document.getElementById('tgen').value;
*/		
		// 1
		// location.href = './sample.html?tname=' + sname + '&tage=' + sage + '&tgen=' + sgen;

		// 2
/*
		document.getElementById('name').value = sname;
		document.getElementById('age').value = sage;
		document.getElementById('gen').value = sgen;
		document.frm.name.value = sname;
		document.frm.nage.value = sage;
		document.frm.ngen.value = sgen;		
*/		
		var sinputs = document.querySelectorAll('div > input[type="text"]');
		//var sdata = document.querySelectorAll('.data');
		var sdata = document.frm.children;
		for (var i = 0; i < sinputs.length; i++) {
			sdata[i].value = sinputs[i].value;
		}
		//document.getElementById('frm').submit();
		document.frm.submit();
		
	}
	
	document.getElementById('cancel').onclick = () => {
		var el = document.querySelectorAll('input[type="text"]');
		for (var i = 0; i < el.length; i++) {
			el[i].value = '';
		}
	}
	
	
	var style = new Array();
	style = document.getElementById('tage').style.cssText;
	style.forEach((prop, val) => {		
		document.body.append(prop + ' : ' + val);
	});
}