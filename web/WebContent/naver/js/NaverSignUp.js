
function sendData() {
	var inputs = $('from > input');
	$('.tdata').each(function(index){
		inputs.eq(index).val($(this).text());
	});
	$('form').submit();	
}

function revealAndPaintRed(jqObj) {
	jqObj.removeClass('w3-hide').removeClass('w3-text-green').addClass('w3-text-red');
}
function revealAndPaintGreen(jqObj) {
	jqObj.removeClass('w3-hide').removeClass('w3-text-red').addClass('w3-text-green');
}
function paintIconGreen(icon) {
	icon.removeClass('w3-text-gray').removeClass('w3-text-red').addClass('w3-text-green');
}
function paintIconRed(icon) {
	icon.removeClass('w3-text-gray').removeClass('w3-text-green').addClass('w3-text-red');
}

function pwConfirmCheck(input, pw) {
	var tpw = pw.val();
	var warning = input.parent().siblings().eq(1);
	var icon = input.siblings();
	
	if (input.val().length === 0) {
		paintIconRed(icon);
		revealAndPaintRed(warning);
		warning.text('필수 요소 입니다.');
	} else if (!(input.val() === tpw)) {
		paintIconRed(icon);
		revealAndPaintRed(warning);
		warning.text('잘못 입력하셨습니다.');
	} else {
		paintIconGreen(icon);
		revealAndPaintGreen(warning);
		warning.text('확인되었습니다.');
	}
}

function pwCheck(input) {
	var patternSpecChar = /(?=[!@#$%^&*])/;
	var patternAlpha = /(?=[a-zA-Z])/;
	var patternNumber = /(?=[0-9])/;
	var patternLength = /^.{8,20}$/;
	var patternNoKor = /(?=[ㄱ-힣])/;
	var warning = input.parent().siblings().eq(1);
	var icon = input.siblings();
	console.log(icon);
	
	if (input.val().length === 0) {
		paintIconRed(icon);
		revealAndPaintRed(warning);
		warning.text('필수 요소 입니다.');
	} else if (patternNoKor.test(input.val())) {
		revealAndPaintRed(warning);
		warning.text('한글은 사용하실 수 없습니다.');
	} else if (!patternSpecChar.test(input.val())) {
		paintIconRed(icon);
		revealAndPaintRed(warning);
		warning.text('비밀번호는 !@#$%^&*중 하나 이상을 반드시 포함해야 합니다.');
	} else if (!patternAlpha.test(input.val())) {
		paintIconRed(icon);
		revealAndPaintRed(warning);
		warning.text('비밀번호는 대문자나 소문자 하나 이상을 반드시 포함해야 합니다.');
	} else if (!patternNumber.test(input.val())) {
		paintIconRed(icon);
		revealAndPaintRed(warning);
		warning.text('비밀번호는 숫자 하나 이상을 반드시 포함해야 합니다.');
	} else if (!patternLength.test(input.val())) {
		paintIconRed(icon);
		revealAndPaintRed(warning);
		warning.text('비밀번호는 8~20자 사이로 입력해주세요.');
	} else {
		paintIconGreen(icon);
		revealAndPaintGreen(warning);
		warning.text('사용가능한 비밀번호입니다.');
	}
}

function idCheck(input) {
	var patternNoSpecChar = /(?=[^a-zA-Z0-9._-])/;
	var patternLength = /^.{8,20}$/;
	var patternNoKor = /(?=[ㄱ-힣])/;
	var warning = input.parent().siblings().eq(1);
	
	if (input.val().length === 0) {
		revealAndPaintRed(warning);
		warning.text('필수 요소 입니다.');
	} else if (patternNoKor.test(input.val())) {
		revealAndPaintRed(warning);
		warning.text('한글은 사용하실 수 없습니다.');
	} else if (patternNoSpecChar.test(input.val())) {
		revealAndPaintRed(warning);
		warning.text('아이디에 특수기호는 ._-만 사용할 수 있습니다.');
	} else if (!patternLength.test(input.val())) {
		revealAndPaintRed(warning);
		warning.text('아이디는 8~20자 사이로 입력해주세요.');
	} else {
		revealAndPaintGreen(warning);
		warning.text('멋진 아이디네요.');
	}
}

$(document).ready(function() {
	
/*	$('#send').click(function() {
		idCheck($('#tid'));
	});*/
	
	$('#tid').on('keyup', function() {
		idCheck($(this));
	});
	
	$('#tpw').on('keyup', function() {
		pwCheck($(this));
	});

	$('#tpw-confirm').on('keyup', function() {
		pwConfirmCheck($(this), $('#tpw'));
	});
	
	//sendData();
	
});