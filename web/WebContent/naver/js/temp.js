function checkForSpecialChars(input) {
	var pattern = /(?=[!@#$%^&*])/;
	return pattern.test(input.val());
}
function checkForEnglish(input) {
	var pattern = /(?=[a-zA-Z])/;
	return pattern.test(input.val());
}
function checkForNumber(input) {
	var pattern = /(?=[0-9])/;
	return pattern.test(input.val());
}
function checkForLength(input, start, end) {
	var pattern = new RegExp("^.{" + start + "," + end + "}$");
	return pattern.test(input.val());
}
function checkForKorean(input) {
	var pattern = /(?=[ㄱ-힣])/;
	return pattern.test(input.val());
}
function checkForKorean(input) {
	var pattern = /(?=[ㄱ-힣])/;
	return pattern.test(input.val());
}
function checkForNoSpecChar(input) {
	var pattern = /(?=[^a-zA-Z0-9._-])/;
	return pattern.test(input.val());
}
