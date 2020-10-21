var printer = (function() {

	var printerInstance;

	function create() {

		function print() {
			// underlying printer mechanics
			document.write('Print<br>');
		}

		function turnOn() {
			// warm up
			// check for paper
			document.write('Turn On');
		}

		return {
			// public + private states and behaviors
			print: print,
			turnOn: turnOn
		};
	}

	return {
		getInstance: function() {
			if (!printerInstance) {
				printerInstance = create();
			}
			return printerInstance;
		}
	};

	function Singleton() {
		if (!printerInstance) {
			printerInstance = intialize();
		}
	};

})();

printer.Singleton();

printer.print();
printer.turnOn();