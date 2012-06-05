/**
 * Builds UL elements for each user passed to it
 * @param data data array of json user objects to display
 * @param outputEl HTML element to write UL's to
 */
function resultByLineItem(data, outputEl) {
	var solution = document.createElement('div');
	for ( var i = 0; i < data.length; i++) {
		var ul = document.createElement('ul');
		var user = data[i];
		ul.appendChild(createEl('li', 'Customer ID: ' + user.userId));
		ul.appendChild(createEl('li', 'First Name: ' + user.firstName));
		ul.appendChild(createEl('li', 'Last Name: ' + user.lastName));
		ul.appendChild(checkBalance(createEl('li', 'Balance: '),user.balance));
		solution.appendChild(ul);
	}
	setDivToEl(solution, outputEl);
}

/**
 * Builds an HTML Table and outputs it to a div
 * 
 * @param data array of json user object to display
 * @param outputEl HTML element to write table to
 */
function buildTable(data, outputEl) {
	var table = document.createElement('table');
	
	// Build Header Row
	var firstRow = document.createElement('tr');
	var headings = [ 'Customer ID', 'First Name', 'Last Name', 'Balance' ];
	for ( var i = 0; i < headings.length; i++)
		firstRow.appendChild(createEl('th', headings[i]));
	table.appendChild(firstRow);

	// Build Data Rows
	for ( var i = 0; i < data.length; i++) {
		var user = data[i];
		var row = document.createElement('tr');
		row.appendChild(createEl('td', user.userId));
		row.appendChild(createEl('td', user.firstName));
		row.appendChild(createEl('td', user.lastName));
		row.appendChild(checkBalance(createEl('td',''),user.balance));
		table.appendChild(row);
	}
	setDivToEl(table, outputEl);
}

//Helper Methods

/**
 * Creates an html element with a specific tag and value
 * 
 * @param tag Type of html element
 * @param value innerHTML of the element
 * @returns HTML element
 */
function createEl(tag, value) {
	var el = document.createElement(tag);
	el.innerHTML = value;
	return el;
}

/**
 * Checks the balance, sets the CSS accordingly
 * @param el the balance element
 * @param balance the balance (number)
 * @returns Revised balance element
 */
function checkBalance(el, balance) {
	el.innerHTML += balance;
	el.className = balance < 0 ? 'negative' : 'positive';
	return el;
}

/**
 * Clears and sets the content of an HTML element
 * @param el Element to output to @param htmlElId
 * @param htmlElId ID of the element to overwrite
 */
function setDivToEl(el, htmlElId) {
	var outputDiv = document.getElementById(htmlElId);
	outputDiv.innerHTML = '';
	outputDiv.appendChild(el);
}