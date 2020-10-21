	function func01(){
		var el1 = document.getElementById('btn1');
		el1.addEventListener('click', function(){
			var tag1 = document.getElementById('msg1');
			
			var str = document.getElementById('name').value ;
			
			var pat1 = /[가-힣]{2,3}/;
			
			var result = pat1.test(str);
			alert(result);
			
			if(result){
				tag1.style = 'font-size: 16pt; color: green;';
				tag1.innerHTML = '클릭되었습니다!';
			} else {
				tag1.style = 'font-size: 16pt; color: red;';
				tag1.innerHTML = '이름을 입력하세요!';
			}
			
			tag1.classList.remove('w3-hide');
			
		});
	}