/**
 * 
 */

var setup = () => {

	var str = '';
	var smonth = '';
	var val = 0;
	for (var i = 0; i < 12; i++) {
		smonth = (i + 1) + '월';
		val = (i + 1);
		str += '<option value="' + val + '">' + smonth + '</option>';
	}
	document.getElementById('month').innerHTML = str;

	var sdate = '';
	for (var i = 0; i < 31; i++) {
		sdate += '<option value="' + (i + 1) + '">' + (i + 1) + '일</option>';
	}

	document.getElementById('day').innerHTML = sdate;

};

var getDay = () => {

	var month = parseInt(document.getElementById("month").options[document.getElementById("month").selectedIndex].value);
	var date = parseInt(document.getElementById("day").options[document.getElementById("day").selectedIndex].value);

	var dateFull = new Date(2020, month - 1, date);
	// getDay() 의 반환값은 0 ~ 6 사이의 숫자를 반환해준다.
	var week = dateFull.getDay();
	var day = '';
	switch (week) {
		case 0:
			day = '일';
			break;
		case 1:
			day = '월';
			break;
		case 2:
			day = '화';
			break;
		case 3:
			day = '수';
			break;
		case 4:
			day = '목';
			break;
		case 5:
			day = '금';
			break;
		case 6:
			day = '토';
			break;
	}

	document.getElementById('wday').innerHTML = '2020년 ' + month + '월 ' + date + '일은 ' + day + '요일';

};

setup();
getDay();