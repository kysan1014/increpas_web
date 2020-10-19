/**
 * 
 */

var kdata = [
	'서울', '부산', '대구', '대전', '인천', '광주', '제주', '울산', '세종'
];

kdata.sort();
document.write(kdata);
document.write('<hr>')
var str1 = kdata.slice(0, 4);
var str2 = kdata.slice(2, -1);
var str3 = kdata.slice(-4, -2);
document.write(str1 + '<br>');
document.write(str2 + '<br>');
document.write(str3 + '<br>');
document.write('<hr>')

var str1 = kdata.splice(1,2);
document.write(str1, '<br>', kdata);
document.write('<hr>')

var str2 = kdata.splice(1,1, '강릉', '수원');
document.write(str2, '<br>', kdata);
document.write('<hr>')

var str3 = kdata.splice(1,Number.MAX_VALUE);
document.write(str3, '<br>', kdata);