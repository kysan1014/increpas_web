/**
 * 
 */
$(document).ready(() => {
	var btnReset = document.getElementById('reset');
	btnReset.onclick = () => {
		var inputs = document.getElementsByClassName('w3-input');
		for (var i = 0; i < inputs.length; i++) {
			inputs.item(i).value = "";
		}
		var dataPanel = document.getElementById('data-panel');
		dataPanel.classList.add('w3-hide');
	};

	var btnRead = document.getElementById('read');
	btnRead.onclick = () => {
		var dataPanel = document.getElementById('data-panel');
		dataPanel.classList.remove('w3-hide');
		var spans = document.getElementsByClassName('data-label');
		var inputs = document.getElementsByClassName('w3-input');
		for (var i = 0; i < inputs.length; i++) {
			spans.item(i).innerHTML = inputs.item(i).value;
		}
	};

	document.getElementById('test').onkeyup = () => {
		document.getElementById('test-label').innerHTML = document.getElementById('test').value;
	};

	/*var btns = Array.from(document.getElementsByClassName('btn'));
	btns.forEach(btn => {
		btn.onclick = () => {
			alert(btn.innerHTML);
		};
	});*/

	$('.btn').on("click", function() {
		var index = $('.btn').index(this);
		console.log($('.btn')[index].innerText);
	});

});