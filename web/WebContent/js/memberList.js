$(function() {
	$('#rbtn').click(function() {
		$('#btnbox2').addClass('w3-hide');
		$('#btnbox2').slideUp(100);
		$('#btnbox2').html('');
		$('#infobox').addClass('w3-hide');
		$('#infobox').slideUp(100);
		$('#content').html('');
	});
	
	$('#lbtn').click(function() {
		var data = {};
		$.ajax({
			url : 'http://localhost:8080/memberList.cls',
			type : 'get',
			dataType : 'json',
			data : { },
			success : function(obj) {
				$('#btnbox2').html('');
				console.log(obj);
				console.log()
				for (var i = 0; i < obj.rows.length; i++){
					var btn = document.createElement('div');
					btn.setAttribute('id', obj.rows[i].MNO);
					btn.setAttribute('class', 'w3-col m2 w3-purple w3-button btn');
					btn.innerText = obj.rows[i].NAME;
					console.log(btn);
					$('#btnbox2').append(btn);
					
					var id = '#' + obj.rows[i].MNO;
					console.log(id);
				}

				var data = obj.rows;
				
				$('.btn').click(function() {
					var i = $('.btn').index($(this));
					$('#mno').text(data[i].MNO);
					$('#id').text(data[i].ID);
					$('#name').text(data[i].NAME);
					$('#mail').text(data[i].MAIL);
					$('#gen').text(data[i].GEN);
				});
			},
			error : function(err) {
				console.log(err.message);
				alert('통신 에러');
			}
		});

		
		
		$('#btnbox2').removeClass('w3-hide');
		$('#btnbox2').slideDown(100);
		$('#infobox').removeClass('w3-hide');
		$('#infobox').slideDown(100);
	})
});