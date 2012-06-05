<?xml version="1.0" encoding="UTF-8"?>
<users>
	<headings>
		<heading>Customer ID</heading>
		<heading>First Name</heading>
		<heading>Last Name</heading>
		<heading>Balance</heading>
	</headings><% 
for(Beans.User user : (java.util.Collection<Beans.User>)request.getAttribute("users")) { %>
	<user>
		<userId><%= user.getUserId()%></userId>
		<firstName><%= user.getFirstName()%></firstName>
		<lastName><%= user.getLastName() %></lastName>
		<balance><%= user.getBalance() %></balance>
	</user>
<% } %>
</users>