/**
 * Problem 1: Avoid Name Conflicts
 * Declare miniFirebug in the global scope so it can be accessed globally but
 * still minimize chance of functions being overwritten
 */
var miniFirebug = {};

(function() {
	//Define Private Functions
	/** Helper Method to create an element. **/
	function createEl(tag,args) {
		var el = document.createElement(tag);
		for (i in args)
			el.setAttribute(i, args[i]);
		return el;
	};

	/** Toggles the mini-firebug console. **/
	function toggle() {
		if(miniFirebug.mainDiv.style.display=='none'){
			miniFirebug.mainDiv.style.display = '';
			miniFirebug.toggleButton.style.display = 'none';
			//Append Filler Object to bottom of body so the console does not hide anything
			document.body.appendChild(miniFirebug.fillerDiv);
		} else {
			miniFirebug.mainDiv.style.display = 'none';
			miniFirebug.toggleButton.style.display = '';
			//Remove the filler object
			document.body.removeChild(miniFirebug.fillerDiv);
		}
	};
	
	/**
	 * Outputs information to the console
	 * @param input The input text to log
	 * @param output The output text to log
	 * @param isError TRUE if the output is an error, FALSE if it's standard output
	 */
	function output(input, output, isError) {
		if (typeof input != 'undefined') {
			var statement = createEl('div',{'class' : 'in'});
			statement.innerHTML = 'I: ' + input;
			miniFirebug.outputDiv.appendChild(statement);
		}
		//Problem 4: Clean up the output by checking for undefined output
		if (typeof output != 'undefined') {
			var out = createEl('div',{'class' : isError ? 'error' : 'out'});
			out.innerHTML = (isError ? 'E: ' : 'O: ') + output;
			miniFirebug.outputDiv.appendChild(out);
		}
		//Problem 2: Support scrolling in the output area
		miniFirebug.outputDiv.scrollTop = miniFirebug.outputDiv.scrollHeight;
	};
	
	/**
	* Initialize Mini-Firebug
	*/
	function init() {
		document.body.appendChild(miniFirebug.mainDiv);
		document.body.appendChild(miniFirebug.toggleButton);
		miniFirebug.mainDiv.appendChild(miniFirebug.outputDiv);
		miniFirebug.mainDiv.appendChild(miniFirebug.consoleDiv);
	};
	//End Private Methods
	
	//Define Global miniFirebug methods
	/**
	 * Problem 5: Add logging function
	 * Logs a message to the console. Invoke it with miniFirebug.log
	 * @param msg Text message to log to the console.
	 */
	miniFirebug.log = function(msg) {
		var out = createEl('div',{'class' : 'log'});
		out.innerHTML = 'Log: ' + msg;
		miniFirebug.outputDiv.appendChild(out);
		
		//Problem 2: Support scrolling in the output area
		miniFirebug.outputDiv.scrollTop = miniFirebug.outputDiv.scrollHeight;
	};
	
	//End Global Methods
	
	//Generate Mini-Firebug HTML Elements
	miniFirebug.mainDiv = createEl('div',{
		'class' : 'miniFirebug',
		style : 'display: none'
	});

	miniFirebug.fillerDiv = createEl('div',{'class' : 'miniFirebugFiller'});
	miniFirebug.outputDiv = createEl('div',{'class' : 'output'});

	miniFirebug.toggleButton = function() {
		var button = createEl('input',{
			type : 'button',
			'class' : 'firebugShowButton',
			value : 'Show Firebug'
		});
		button.onclick = toggle;
		return button;
	}();

	miniFirebug.consoleDiv = function() {
		var console = createEl('form',{
			'class' : 'console',
			action : '#'
		});
		console.onsubmit = function() {
			var evalStatement = console.elements[0].value;
			if (evalStatement) {
				try {
					output(evalStatement, eval(evalStatement));
				} catch (err) {
					output(evalStatement, err.message, true);
				}
				console.reset();
				console.elements[0].focus();
			}
			return false;
		};
		//Create console textbox
		console.appendChild(createEl('input',{type : 'text'}));

		//Create console close button
		var close = createEl('input',{
			type : 'button',
			value : 'Close'
		});
		close.onclick = toggle;
		console.appendChild(close);

		//Create console clear button
		var clear = createEl('input',{
			type : 'button',
			value : 'Clear'
		});
		clear.onclick = function() {
			console.reset();
			miniFirebug.outputDiv.innerHTML = '';
		};
		console.appendChild(clear);

		//Create console submit button
		console.appendChild(createEl('input',{
			type : 'submit',
			value : 'Run'
		}));
		return console;
	}();

	// Problem 3: Prevent HTML Page author from having to put HTML into page
	// On window load, initialize and create the minifirebug code
	// Initialize Mini-Firebug
	if (window.onload)
		var tempLoad = window.onload;

	window.onload = function() {
		if (typeof tempLoad != 'undefined')
			tempLoad();
		init();
	};
}());
