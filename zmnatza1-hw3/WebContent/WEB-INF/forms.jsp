<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  	<title>HW3</title>
	<link rel="stylesheet" type="text/css" href="./css/style.css"></link>
	<script src="./scripts/ajaxHelpers.js" type="text/Javascript"></script>
</head>
<body>
<div class="problems">
	<form id="prob1Form" action="userInfo" onsubmit="return ajaxFormSubmit(this,'solution')">
		<h2>Problem 1</h2>
		<input type="submit" value="Lookup User"></input>
	  	<label>Customer ID:</label>
	  	<input type="text" name="userId"/>
	</form>
	<form id="prob2Form" action="userInfo" onsubmit="return ajaxFormSubmit(this,'solution')">
		<h2>Problem 2</h2>
		<input type="submit" value="Lookup User"></input>
		<label>Customer ID:</label>
		<select name="userId" style="width: 150px">
			<option>- Select a Customer -</option>
<%		
		for(Beans.User user : (java.util.Collection<Beans.User>) request.getAttribute("users")) { 
%>			<option value="<%= user.getUserId() %>"><%= user.getUserId() %></option>
<%}%>	</select>
	</form>
	<form id="prob3Form" action="userInfo" onsubmit="return ajaxFormSubmit(this,'solution')">
		<h2>Problem 3</h2>
		<input type="submit" value="Lookup User"/>
		<label>First Name:</label>
		<input type="text" name="firstName"/><br/>
		<label>Last Name:</label>
		<input type="text" name="lastName"></input>
	</form>
</div>
<div id="solution"></div>
</body></html>
