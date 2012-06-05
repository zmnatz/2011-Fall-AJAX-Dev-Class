/**
 * Requests user info from the server
 * 
 * @param form The form info to submit
 * @param type The format requested for the response
 * @param outputEl HTML element to output results to
 * @returns FALSE to stop HTML submit
 */
function getUserInfo(users, handlerFunc, outputEl) {
	var params = '';
	for ( var i = 0; i < users.length; i++)
		params += 'userId=' + escape(users[i])+'&';
	ajaxResultPost('userInfo' , params, function(response) {
		var rawData = response.responseText;
		var data = eval("(" + rawData + ")");
		handlerFunc(data, outputEl);
	});
	return false;
}

/**
 * Creates an AJAX request with the given parameters, calls the sent method when
 * finished
 * 
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