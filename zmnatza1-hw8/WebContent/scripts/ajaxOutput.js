/**
 * Builds an HTML Table of Users and returns it
 * @param data array of json user object to display
 */
function buildUserTable(data) {
	return buildTable(data,[
       ['userId','Customer ID'],
       ['firstName','First Name'],
       ['lastName','Last Name'],
       ['balance','Balance']
    ]);
}

/**
 * Builds a Generic HTML table with given data
 * @param data Data array of json objects to display
 * @param map [][] which gives headers and field names,
 * 			determined automatically if not provided
 * @returns an HTML table
 */
function buildTable(data,map) {
	var table = document.createElement('table');
	
	function createEl(tag, value) {
		var el = document.createElement(tag);
		el.innerHTML = value;
		return el;
	}
	
	//If no map is given, create it
	if(typeof map=='undefined')
	{
		map = [];
		if(data && data.length > 0)
			for(field in data[0])
				if(typeof data[0][field] != 'function')
					map.push([field,field]);
	}
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