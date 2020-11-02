/**
 * http://usejsdoc.org/
 */

$(function() {

	$('#btn').click(function() {
		var sid = $('#id').val();
		$.ajax({
			url : 'http://localhost:8080/idCheck.ck', // 주소
			type : 'get', // 전송방식 GET, POST
			dataType : 'json', // 데이터 형식 예) html, text, xml, json
			data : {
				id : sid
			},
			success : function(obj) { // 통신 성공시 실행할 함수
				$('#fr').removeClass('w3-hide');
				$('#msg').addClass('w3-text-red w3-text-green');
				console.log(obj.result);
				if (obj.result == 'YES') {
					$('#msg').removeClass('w3-text-red');
					$('#msg').text('사용 가능한 아이디 입니다.');
				} else if (obj.result == 'NO'){
					$('#msg').addClass('w3-text-red');
					$('#msg').text('사용 불가한 아이디 입니다.');
				} else {
					$('#msg').addClass('w3-text-red');
					$('#msg').text('아이디를 입력하세요.');
				}
			},
			error : function() {
				alert('통신 실패');
			} // 통신 실패시 실행할 함수
		});
	});

});