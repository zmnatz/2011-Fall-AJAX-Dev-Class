/**
 * Builds an HTML Table of Users and returns it
 * @param data array of json user object to display
 */
function buildUserTable(data) {
	function createEl(tag, value) {
		var el = document.createElement(tag);
		el.innerHTML = value;
		return el;
	}
	
	var table = document.createElement('table');
	
	var map = [
        ['userId','Customer ID'],
        ['firstName','First Name'],
        ['lastName','Last Name'],
        ['balance','Balance']
     ];
	
	// Build Header Row
	var firstRow = document.createElement('tr');
	map.each(function(key){
		firstRow.appendChild(createEl('th',key[1]));
	});
	table.appendChild(firstRow);
	
	data.each(function(entry){
		var row = document.createElement('tr');
		map.each(function(key){
			row.appendChild(createEl('td',entry[key[0]]));
		});
		table.appendChild(row);
	});
	return table;
}