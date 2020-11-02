var init = () => {
	document.body.append('이것은 람다식으로 처리한 내용');
}

init();

var tryForEach = (()=> {
	var items = [1,2,3,4,5];
	var appendValue = () => {
		document.body.append(items);
	}
	return {
		appendValue: appendValue
	};
})();

tryForEach.appendValue();
document.body.append(tryForEach.items);