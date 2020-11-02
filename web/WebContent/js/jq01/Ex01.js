var initialize = (function() {
	var data = {
		man1: {
			name: '이지우',
			age: 26,
			tel: '010-1111-1111',
			mail: 'jiwoo@increpas.com',
			gen: '남자'
		},
		man2: {
			name: '장성환',
			age: 27,
			tel: '010-2222-2222',
			mail: 'hwan@increpas.com',
			gen: '남자'
		},
		man3: {
			name: '오혜찬',
			age: 28,
			tel: '010-3333-3333',
			mail: 'chan@increpas.com',
			gen: '남자'
		},
		man4: {
			name: '유병욱',
			age: 29,
			tel: '010-4444-4444',
			mail: 'wook@increpas.com',
			gen: '남자'
		},
		man5: {
			name: '윤요셉',
			age: 30,
			tel: '010-5555-5555',
			mail: 'joseph@increpas.com',
			gen: '남자'
		}
	}

	var setData = function() {
		$('.btn').each(function(index) {
			var divs = $(this).siblings();
			var obj = data[Object.keys(data)[index]];
			var keyArr = Object.keys(obj);
			for (var i = 0; i < divs.length; i++) {
				divs.eq(i).text(obj[keyArr[i]]);
			}
			$(this).text('전송');
		});
	}

	var setCss = function() {
		$('#ctnt').children().even().addClass('w3-light-gray');
		$('.btn').addClass('w3-hover-black');
	}

	return {
		setData: setData,
		setCss: setCss
	}

})();


$(function() {

	initialize.setCss();
	initialize.setData();

	$('#ctnt').children().even().addClass('w3-light-gray');
	$('.btn').addClass('w3-hover-black');

	$('.btn').click(function() {
		var data = $(this).siblings();
		$('input').each(function(i) {
			$(this).val(data.eq(i).text());
		});
		$('#frm').submit();
	});

});