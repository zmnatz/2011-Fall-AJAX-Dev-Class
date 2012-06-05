window.onload = function() {
	var cityString = 
		"Albany,Aberdeen,Abilene,Alamo,Babylon,Buckeystown,Baldwin,Baltimore";
	var cityArray = cityString.split(",");
	
	new Autocompleter.Local("cityField1", "cityMenu1", cityArray);
	new Ajax.Autocompleter("cityField2", "cityMenu2","cities");
	new Ajax.Autocompleter("userId","userMenu","users");
};

/**
 * Requests info for user as JSON data using Prototype(Ajax.Request)
 * @param userField Text item to get user ID from
 * @param outputEl HTML element to output results to
 */
function usersSubmit(userField, outputEl) {
	new Ajax.Request('userInfo',{
		parameters: {'userId': getValue(userField)},
		onSuccess: function(response){
			$(outputEl).update(buildUserTable(response.responseJSON));
			new Effect.Highlight(outputEl);
		}
	});
	return false;
}

/**
 * Performs a Google Search with the contents of an input element
 * @param id
 */
function googleSearch(id) {
	window.location.href = "http://www.google.com/search?q=" + getValue(id);
}

/**
 * Return the escaped value of an HTML Input
 * @param id ID of the element to get value of
 * @returns Escaped value of the element
 */
function getValue(id) {
	return(escape($(id).value));
}