/**
 * Requests info for multiple users as JSON data using Prototype(Ajax.Request)
 * @param userField the user text element to load user
 * @param outputEl HTML element to output results to
 */
function usersSubmit(userField, outputEl) {
	var userId = escape($(userField).val());
	$.getJSON('userInfo',{userId: userId},
		function(jsonResponse){
			$(outputEl).html(resultByLineItem(jsonResponse));
		}
	);
}

/**
 * Request info for a user from the server and outputs the HTML results in outputEl
 * @param userField the user text element to load a user
 * @param outputEl HTML element to output results to
 */
function loadUser(userField,outputEl) {
	var userId = escape($(userField).val());
	$(outputEl).load('userInfo', {format: 'HTML',userId: userId});
}

/**
 * Highlights elements marked with the undefined class
 */
function highlightUndefined() {
	$('.undefined').each(function(){
		$(this).effect('highlight');
	});
}

/**
 * Builds UL elements for each user passed to it
 * @param data data array of json user objects to display
 * @param outputEl HTML element to write UL's to
 */
function resultByLineItem(data) {
	function createLI(label,val) {
		var li = $('<li/>').append(label+': '+val);
		if(val=='Undefined' || val==0)
			li.addClass('undefined');
		return li;
	}
	
	var solution = $('<div/>');
	for ( var i = 0; i < data.length; i++) {
		solution.append($('<ul/>')
			.append(createLI('Customer ID',data[i].userId))
			.append(createLI('First Name',data[i].firstName))
			.append(createLI('Last Name',data[i].lastName))
			.append(createLI('Balance',data[i].balance))
		);
	}
	return solution;
}