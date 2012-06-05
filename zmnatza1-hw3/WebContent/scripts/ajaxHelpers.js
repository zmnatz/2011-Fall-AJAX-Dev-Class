/**
 * Submits a form as an ajax request rather than a standard HTTP one.
 */
function ajaxFormSubmit(form, outputEl) {
	if (!form || !outputEl)
		return false;
	url = form.action + '?';
	var i = 0;
	while (el = form.elements[i++])
		if (el.value && el.name && el.type != "submit" && el.type != "reset"
				&& el.type != 'button')
			url += el.name + "=" + escape(el.value) + "&";

	var request = getRequestObject();
	request.onreadystatechange = function() {
		ajaxWriteItems(request, document.getElementById(outputEl));
	};
	request.open("GET", url, true);
	request.send(null);
	return false;
}

/**
 * Writes the response from an ajax request to a given HTML element
 * 
 * @param response
 *            The Ajax Request
 * @param writeTo
 *            The HTML element to output the response to
 */
function ajaxWriteItems(response, writeTo) {
	if (response.readyState == 4) {
		if (response.status == 200)
			writeTo.innerHTML = '<ul><li>'
					+ response.responseText.replace(/<br\/>/g, '</li><li>')
					+ '</li></ul>';
		else
			writeTo.innerHTML = '';
	}
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
}