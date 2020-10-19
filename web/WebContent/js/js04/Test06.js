function Stud(name, age, gender){
	this.name = name,
	this.age = age,
	this.gender = gender,
	this.work = function() {
		return this.name + "씨가 열심히 공부합니다.";
	}
}
/*

class Stud {
	constructor(name, age, gender) {
		this.name = name,
			this.age = age,
			this.gender = gender,
			this.work = function() {
				return this.name + "씨가 열심히 공부합니다.";
			};
	}
}
*/
var jiwoo = new Stud('이지우', 26, '남');
var sunhwan = new Stud('장성환', 27, '남');

Stud.prototype.scores = [];
Stud.prototype.getTotal = function() {
	var total = 0;
	this.scores.forEach(function(score) {
		total += score;
	});
	return total;
}

jiwoo.scores = [80, 90, 100];
sunhwan.scores = [85, 95, 100];

document.write("jiwoo name : " + jiwoo.name + '<br>');
document.write("jiwoo age : " + jiwoo.age + '<br>');
document.write("jiwoo gender : " + jiwoo.gender + '<br>');
document.write("jiwoo total : " + jiwoo.getTotal() + '<br>');
document.write("jiwoo work : " + jiwoo.work() + '<br>');
document.write('<hr>');
document.write("sunhwan name : " + sunhwan.name + '<br>');
document.write("sunhwan age : " + sunhwan.age + '<br>');
document.write("sunhwan gender : " + sunhwan.gender + '<br>');
document.write("sunhwan total : " + sunhwan.getTotal() + '<br>');
document.write("sunhwan work : " + sunhwan.work() + '<br>');
document.write('<hr>');

var printer = (function () {

    var printerInstance;

    function create () {

    function print() {
        // underlying printer mechanics
    }

    function turnOn() {
        // warm up
        // check for paper
    }

    return {
        // public + private states and behaviors
        print: print,
        turnOn: turnOn
    };
    }

    return {
    getInstance: function() {
        if(!printerInstance) {
        printerInstance = create();
        }
        return printerInstance;
    }
    };

    function Singleton () {
    if(!printerInstance) {
        printerInstance = intialize();
    }
    };

})();


