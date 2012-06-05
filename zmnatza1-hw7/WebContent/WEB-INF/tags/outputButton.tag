<%@ attribute name="outputEl" required="true" %>
<%@ attribute name="outputText" required="false" %>
<input type="button" value="Output Something" 
	onClick="document.getElementById('${outputEl}').innerHTML='${outputText}'"/>