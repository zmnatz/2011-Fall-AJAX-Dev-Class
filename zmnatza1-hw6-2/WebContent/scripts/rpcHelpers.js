var rpcClient;

// Initialize RPC Client
window.onload = function() {
	rpcClient = new JSONRpcClient('JSON-RPC');
};

/**
 * Requests user info from the server
 * 
 * @param form The form info to submit
 * @param type The format requested for the response
 * @param outputEl HTML element to output results to
 * @returns FALSE to stop HTML submit
 */
function getUserInfo(users, handlerFunc, outputEl) {
	var callback = function(userData, exception) {
		if (exception)
			alert(exception.msg);
		else {
			handlerFunc(userData.list, outputEl);
		}
	};
	rpcClient.userDatabase.getUsers(callback, users);
	return false;
}

/**
 * Add a user to the 'database'
 * @param user User object to add
 */
function addUser(user) {
	var callback = function(results, exception) {
		if (exception)
			alert(exception.msg);
		else
			alert("User created successfully.");
	};
	if(user.userId=='' || user.firstName=='' || user.lastName=='' || user.balance=='')
		alert('Please fill out all the fields.');
	else
		rpcClient.userDatabase.addUser(callback,user.userId,user.firstName,user.lastName,user.balance);
}