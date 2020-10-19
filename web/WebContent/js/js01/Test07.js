/**
 * 
 */

var name = prompt('이름을 입력하세요!');

alert('이름 : ' + name);

/*
	문제 ]
		본문에 h1태그를 만들어서
			
			이름 : ***
			
		의 형식으로 문서의 내용이 출력되게 하세요.
		
		문자의 정렬은 가운데 정렬을 사용하기로 한다.
		
		w3.css 를 사용해서 처리하세요.
*/

document.write('<div class="w3-content w3-center" style="max-width: 500px;">');
document.write('	<h1 class="w3-purple w3-padding w3-margin-top w3-card-4 w3-round-large w3-border w3-border-grey">');
document.write(			name);
document.write('	</h1>');
document.write('</div>');
