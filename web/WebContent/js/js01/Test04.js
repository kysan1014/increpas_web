/**
 * 
 */
 
 var changeValues = (() => {
 	var name = "";
 	var score = "";
 	
 	function setName(input) {
 		name = input;
 	}
 	function setScore(input) {
 		score = input;
 	}
 	
 	return {
 		changeName : () => {
 			setName(prompt("이름을 입력하세요"));
 		},
 		changeScore : () => {
 			setScore(prompt("점수를 입력하세요"));
 		},
 		getName : () => {
 			return name;
 		},
 		getScore: () => {
 			return score;
 		}
 	}
 	
 })();

var spans = document.getElementsByClassName("values");

changeValues.changeName();
changeValues.changeScore();

console.log(spans);

spans[0].textContent = changeValues.getName();
spans[1].textContent = changeValues.getScore();


