$(function() {

	$('#btn1').click(function() {
		$('input').val('');
	});

	$('#btn2').click(function() {
		var tid = $('#id').val();
		var tpw = $('#pw').val();

		if (!(tid && tpw)) {
			return;
		}

		$.ajax({
			url : 'http://localhost:8080/Login.cls',
			type : 'get',
			dataType : 'text/json',
			data : {
				id : tid,
				pw : tpw
			},
			success : function(obj) {
				if (obj.result == 'YES') {
					$('#in01').addClass('w3-hide');
					$('#msg').removeClass('w3-hide');
				} else {
					alert('로그인 실패');
					$('input').val('');
				}
			},
			error : function(err) {
				console.log(err.message);
				alert('통신 에러');
				$('#id').focus();
			}

		});

	});

});