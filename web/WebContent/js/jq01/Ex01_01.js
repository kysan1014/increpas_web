$(function() {

	$('.btn').click(function() {
		var data = $(this).parent().siblings();
		$('input').each(function(i) {
			$(this).val(data.eq(i).text());
		});
		$('#frm').submit();
	});


});