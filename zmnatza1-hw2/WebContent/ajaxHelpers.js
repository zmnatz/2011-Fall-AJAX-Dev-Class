function ajaxAlert(response)
{
	if(response.readyState == 4)
	{
		if(response.status==200)
			alert(response.responseText.replace(/<br\/>/g,'\n'));
		else
			alert('The given User ID could not be found');
	}
}

function ajaxWriteItems(response,writeTo) {
	if(response.readyState == 4) {
		if(response.status == 200) 
			writeTo.innerHTML = '<ul><li>' + response.responseText.replace(/<br\/>/g,'</li><li>') + '</li></ul>';
		else
			writeTo.innerHTML = '';
	}
}

function getRequestObject()
{
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		return null;
	}
}