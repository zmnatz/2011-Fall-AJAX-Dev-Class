/**
 * Requests info for multiple users as JSON data using Prototype(Ajax.Request)
 * @param form the form info to submit
 * @param outputEl HTML element to output results to
 */
function usersSubmit(form, outputEl) {
	return getUserInfo(form,Ajax.Request,function(response){
		$(outputEl).update(buildUserTable(response.responseJSON));
	},outputEl);	
}

/**
 * Requests info for multiple users as JSON data using custom written AjaxRequest
 * @param form the form info to submit
 * @param outputEl HTML element to output results to
 */
function usersSubmitCustomRequester(form, outputEl) {
	return getUserInfo(form,AjaxRequest,function(response){
		var rawData = response.responseText;
		var data = eval("(" + rawData + ")");
		$(outputEl).update(buildUserTable(data));
	},outputEl);	
}

/**
 * Requests user info from the server
 * 
 * @param form The form info to submit
 * @param requesterClass The class that will be instantiated to send the request.
 * @param successFunc Function to handle request success
 * @param outputEl HTML element to output results to
 * @returns FALSE to stop HTML submit
 */
function getUserInfo(form,requesterClass,successFunc,outputEl) {
	if(!form || !outputEl)
		return false;
	new requesterClass('userInfo',{
		parameters: {'userId': form.userIds.value.split(',')},
		onSuccess: successFunc
	});
	$(outputEl).update('Requesting customer info...');
	return false;
}