/**
 * Requests user info as xml data
 * @param form The form info to submit
 * @param outputEl HTML element to output results to
 * @returns FALSE to stop HTML submit
 */
function xmlSubmit(form, outputEl) {
	return formSubmit(form, 'xml', function(response) {
		
		function getBodyContent(element) {
			element.normalize();
			return (element.childNodes[0].nodeValue);
		}

		//Get XML Response
		var xmlDocument = response.responseXML;
		
		//Parse Header Data
		var headingXml = xmlDocument.getElementsByTagName('heading');
		var headings = new Array(headingXml.length);
		for ( var i = 0; i < headings.length; i++)
			headings[i] = getBodyContent(headingXml[i]);

		//Parse User Info Data
		var users = xmlDocument.getElementsByTagName("user");
		var subElementNames = [ "userId", "firstName", "lastName", "balance" ];
		var rows = new Array(users.length);
		for ( var i = 0; i < users.length; i++) {
			var user = new Array(subElementNames.length);
			for ( var j = 0; j < subElementNames.length; j++)
				user[j] = getBodyContent(users[i]
						.getElementsByTagName(subElementNames[j])[0]);
			rows[i] = user;
		}
		
		//Generate Table
		buildTable(headings, rows, outputEl, 2);
	});
}

/**
 * Requests user info as JSON data
 * @param form The form info to submit
 * @param outputEl HTML element to output results to
 * @returns FALSE to stop HTML submit
 */
function jsonSubmit(form, outputEl) {
	return formSubmit(form, 'json', function(response) {
		var rawData = response.responseText;
		var data = eval("(" + rawData + ")");
		buildTable(data.headings, data.users, outputEl, 2);
	});
}

/**
 * Requests user info as plain text
 * @param form The form info to submit
 * @param outputEl HTML element to output results to
 * @returns FALSE to stop HTML submit
 */
function stringSubmit(form, outputEl) {
	return formSubmit(form, 'string', function(response) {
		var rowStrings = response.responseText.split(/[\n\r]+/);
		var headings = rowStrings[0].split("#");
		var rows = new Array(rowStrings.length - 1);
		for ( var i = 1; i < rowStrings.length; i++) {
			rows[i - 1] = rowStrings[i].split("#");
		}
		buildTable(headings, rows, outputEl, 2);
	});
}

/**
 * Requests user info from the server
 * @param form The form info to submit
 * @param type The format requested for the response
 * @param outputEl HTML element to output results to
 * @returns FALSE to stop HTML submit
 */
function formSubmit(form, type, outputEl) {
	if (!form || !outputEl)
		return false;

	var params = '';
	var i=0;
	while (el = form.elements[i++])
		if (el.name && el.type != "submit" && el.type != "reset"
				&& el.type != 'button')
			params += el.name + "=" + escape(el.value) + "&";
	params += 'format=' + type;
	ajaxResultPost(form.action, params, outputEl);
	return false;
}