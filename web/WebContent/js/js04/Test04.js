var kdata = ['서울', '대구', '대전', '부산'];

function printArr(item, index) {
	document.write('배열 데이터 [' + index + '] : ' + item + '<br>');
}

function printArr2(value) {
	document.write('배열 데이터 : ' + value + '<br>');
}

kdata.forEach(printArr);

var str = '';
kdata.forEach((value, index) => {
	str += value;
	if (index + 1 == kdata.length) return;
	str += '/';
});
document.write(str);

document.write('<hr>')

var printer = (() => {
	var kdata = ['서울', '대구', '대전', '부산'];
	var str = '';
	var buildStr = () => {
		kdata.forEach((value, index) => {
			str += value;
			if (index + 1 == kdata.length) return;
			str += '/';
		});
	}
	return {
		getStr: () => {
			buildStr();
			return str;
		},
		setKdata: (arr) => {
			kdata = arr;
		}
	};
})();

document.write(printer.getStr());

document.write('<hr>')

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var mapArr = (value) => {
	return value + value;
}

var mapdata = data.map(mapArr);

document.write(mapdata);

document.write('<hr>')

var filterArr = (value) => {
	return value % 3 == 0;
}

var newData = data.filter(filterArr);

document.write(newData);

document.write('<hr>')

var data = [1, 1, 1, 1];
var idx = data.indexOf(1);
document.write(idx);

document.write('<hr>')

var smap = {'일번' : '윤요셉', '이번':'유병욱', '삼번':'오혜찬'};

document.write(smap['일번']);



