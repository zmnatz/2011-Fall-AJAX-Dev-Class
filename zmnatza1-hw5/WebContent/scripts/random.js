/**
 * Generate Random Numbers
 * 
 * @param numRandoms
 *            Number of Random Numbers to generate
 * @param clientOrServer
 *            specify where to generate the numbers, client, server, or both
 * @param handler
 *            function to handle the numbers when generation is complete
 */
function generateRandoms(numRandoms, clientOrServer, handler) {
	var numbers = [];
	switch (clientOrServer) {
	case 'client':
		// Generate random numbers on the client, handle with passed method
		var clientRandoms = new Array(numRandoms);
		for ( var i = 0; i < numRandoms; i++)
			clientRandoms[i] = Math.random();
		numbers.push(clientRandoms);
		handler(numbers);
		break;
	case 'server':
		// Generate random numbers on the server, handle with passed method
		ajaxResultPost('getRandoms', 'numRandoms=4', function(response) {
			numbers.push(response.responseText.split("#"));
			handler(numbers);
		});
		break;
	default:
		// Generate random numbers on both. First the server, then generate
		// numbers on the client once a response is received.
		generateRandoms(4, 'server', function(serverRandoms) {
			generateRandoms(4, 'client', function(clientRandoms) {
				numbers = numbers.concat(clientRandoms);
				numbers = numbers.concat(serverRandoms);
				handler(numbers);
			});
		});
		break;
	}
}

/**
 * Generates and processes a set of random numbers
 * 
 * @param numRandoms
 *            Number of randoms to generate
 * @param outputEl
 *            HTML Element to output results to
 * @param winningNumber
 *            Number randoms must total to in order to "win"
 */
function processRandoms(numRandoms, outputEl, winningNumber) {
	generateRandoms(numRandoms, 'both', function(numbers) {
		var total = addRandoms(numbers);
		var summary = '<br/>Total: ' + total + '<br/>';
		summary += total > winningNumber ? 'You are a winner.'
				: 'You are a loser';
		outputRandoms(numbers, summary, outputEl);
	});
}

/**
 * Parse through a set of random numbers, add them together
 * 
 * @param randoms
 *            2 dimensional array of numbers to add together
 * @returns {Number} Total of all the values
 */
function addRandoms(randoms) {
	var total = 0;
	for ( var i in randoms)
		for ( var j in randoms[i])
			total += (+randoms[i][j]);
	return total;
}

/**
 * Output data to an HTML element
 * 
 * @param randoms
 *            Random number data
 * @param summary
 *            Summary to output after the random numbers
 * @param outputEl
 *            ID of the HTML element to output results to
 */
function outputRandoms(randoms, summary, outputEl) {
	var headers = new Array(randoms[0].length);
	for ( var i = 1; i <= randoms[0].length; i++)
		headers[i - 1] = 'Random #' + i;
	buildTable(headers, randoms, outputEl);
	document.getElementById(outputEl).innerHTML += summary
}