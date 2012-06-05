/**
 * Requests user info as JSON data
 * @param form The form info to submit
 * @param outputEl HTML element to output results to
 * @returns FALSE to stop HTML submit
 */
function userSubmit(form, outputEl) {
	if (!form || !outputEl)
		return false;
	return getUserInfo([ form.userId.value ], resultByLineItem, outputEl);
}

/**
 * Requests info for multiple users as JSON data
 * @param form the form info to submit
 * @param outputEl HTML element to output results to
 * @returns FALSE to stop HTML submit
 */
function usersSubmit(form, outputEl) {
	if (!form || !outputEl)
		return false;
	return getUserInfo(form.userIds.value.split(','), buildTable, outputEl);
}