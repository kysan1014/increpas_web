var head = ["mno", "mid", "mname", "mbirth", "mgen"];
var data = [1000, "hong", "홍길동", "2020년 10월 19일", "남자"];

function fillData() {
	/*
		document.getElementById("mno").innerText = "1000";
		document.getElementById("mid").innerText = "hong";
		document.getElementById("mname").innerText = "홍길동";
		document.getElementById("mbirth").innerText = "2020년 10월 19일";
		document.getElementById("mgen").innerText = "남자";
	*/
	for (var i = 0; i < head.lengh; i++) {
		document.getElementById(head[i]).innerHTML = data[i];
	}
}

