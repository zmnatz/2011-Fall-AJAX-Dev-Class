/**
 * Creates an AJAX request with the given parameters, calls the sent method when finished
 * @param url Where to send the HTTPXml Request
 * @param params parameter string to send with the request
 * @param responseHandler function to handle the request
 */
function ajaxResultPost(url, params, responseHandler) {
	var request = getRequestObject();
	request.open("GET", url + '?' + params, true);
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			if (request.status == 200)
				responseHandler(request);
		}
	};
	request.send();
}

/**
 * Creates an HTML request depending on what browser is in use
 */
function getRequestObject() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		return null;
	}
};

/**
 * Builds an HTML Table and outputs it to a div
 * @param headings Array of headings for the table
 * @param rows 2-dimensional array of data to display in the table cells
 * @param outputEl HTML element to write table to
 */
function buildTable(headings, rows, outputEl) {
	/**
	 * Creates an html element with a specific tag and value
	 * @param tag Type of html element
	 * @param value innerHTML of the element
	 * @returns HTML element
	 */
	function createEl(tag, value) {
		var el = document.createElement(tag);
		el.innerHTML = value;
		return el;
	}

	var table = document.createElement('table');

	// Build Header Row
	var firstRow = document.createElement('tr');
	for ( var i = 0; i < headings.length; i++)
		firstRow.appendChild(createEl('th', headings[i]));
	table.appendChild(firstRow);

	// Build Data Rows
	for ( var i = 0; i < rows.length; i++) {
		var row = document.createElement('tr');
		for ( var j = 0; j < headings.length; j++)
			row.appendChild(createEl('td', (rows[i] && rows[i][j]) ? rows[i][j]
					: 'Undefined'));
		table.appendChild(row);
	}

	// Output Table to div
	var outputDiv = document.getElementById(outputEl);
	outputDiv.innerHTML = '';
	outputDiv.appendChild(table);
}