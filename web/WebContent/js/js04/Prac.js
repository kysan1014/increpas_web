// 데이터
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// 클로저 (이것에 대한 것은 궁금하지 않는한 신경쓰지 않을 것)
var myArrProcessor = function(inArr) {
	// 배열 복사 (원본 데이터 보존)
	var data = inArr.slice();
	// 배열 복사 후, 함수를 멤버로 가진 객체 리턴
	// 이 경우 myArrProcessor 함수의 멤버 배열 data를 전역변수로서 사용 가능
	return {
		// map 함수 선언 및 초기화
		// 파라미터 : 맵핑용 함수 -> 배열의 i번째 값을 받아 처리한 후 리턴
		map: function(mapfunc) {
			// 빈 배열 선언 및 초기화
			var newData = [];
			for (var i = 0; i < data.length; i++) {
				// 배열의 각 요소를 mapfunc 함수로 처리한 값 저장
				var newElement = mapfunc(data[i]);
				// 새로운 값을 newData 배열에 삽입
				newData.push(newElement);
			}
			// 배열 리턴
			return newData;
		},
		// filter 함수 선언 및 초기화
		// 파라미터 : 필터링용 함수 -> 배열의 i번째 값을 받아 
		//			  새로운 배열에 포함할 지를 boolean으로 리턴
		filter: function(filterfunc) {
			// 빈 배열 선언 및 초기화
			var newData = [];
			for (var i = 0; i < data.length; i++) {
				// 배열의 각 요소를 filterfunc 함수로 처리한 값 저장 
				var bool = filterfunc(data[i]); // boolean
				if (bool) {
					// flterfunc(data[i]) 값이 true인 경우에만
					// i번째 값을 newData 배열에 삽입
					newData.push(data[i]);
				}
			}
			// 배열 리턴
			return newData;
		}
	}
}
// 매핑용 함수
// 배열의 i 번째 값을 파라미터로 받아 처리한 값을 리턴
var mapper = (value) => {
	return value + 1;
}

// 필터용 함수
// 배열의 i 번째 값을 새로운 배열에 포함할 것인지를
// boolean으로 처리하여 리턴
var filterer = (value) => {
	return value % 2 == 0;
}

// 배열을 파라미터로 하는 myArrProcess함수를 호출하여,
// 리턴된 객체를 proc에 저장
var proc = myArrProcessor(arr);

// mapper 함수를 파라미터로 하는 proc의 멤버 함수 map 호출,
document.write(proc.map(mapper));

document.write('<hr>')

// filterer 함수를 파라미터로 하는 proc의 멤버 함수 filter 호출
document.write(proc.filter(filterer));
