<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  	<title>HW7</title>
  	<%@ taglib tagdir="/WEB-INF/tags" prefix="utilJSP" %>
  	<%@ taglib uri="/WEB-INF/tlds/util-taglib.tld" prefix="utilJava" %>
	<link rel="stylesheet" type="text/css" href="./css/style.css"></link>
	<script src="./scripts/formSubmitters.js" type="text/Javascript"></script>
	<script src="./scripts/ajaxHelpers.js" type="text/Javascript"></script>
</head>
<body>
<div class="problems">
	<form id="prob1Form" action="#" onsubmit="return xmlSubmit(this, 'solution')">
		<h2>Problem 1: XML Submission</h2>
		<input type="submit" value="Send XML"></input>
	  	<p>Enter customer IDs below (Comma Delimited):</p>
	  	<textarea name="userIds"></textarea>
	</form>
	<form id="prob2Form" action="#" onsubmit="return jsonSubmit(this, 'solution')">
		<h2>Problem 1: JSON Submission</h2>
		<input type="submit" value="Send JSON"></input>
		<p>Enter customer IDs below (Comma Delimited):</p>
	  	<textarea name="userIds"></textarea>
	</form>
	<form id="prob3Form" action="#" onsubmit="return stringSubmit(this, 'solution')">
		<h2>Problem 3: String Submission</h2>
		<input type="submit" value="Send String"></input>
		<p>Enter customer IDs below (Comma Delimited):</p>
	  	<textarea name="userIds"></textarea>
	</form>
	<form id="prob4Form" action="#">
		<h2>Problem 4: Java Tag Library</h2>
		<utilJava:outputButton outputEl="solution" 
			outputText="This is output from a Java file"/>	
	</form>
	<form id="prob5Form" action="#">
		<h2>Problem 5: Tag File</h2>
		<utilJSP:outputButton outputEl="solution" outputText="This is output from a tag file"/>	
	</form>
</div>
<div id="solution"></div>
</body></html>
