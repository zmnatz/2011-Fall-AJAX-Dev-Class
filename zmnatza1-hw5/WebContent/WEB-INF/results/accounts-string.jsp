Customer ID#First Name#Last Name#Balance
<% for(Beans.User user : (java.util.Collection<Beans.User>)request.getAttribute("users")) { %>
	<%= user.getUserId()%>#<%= user.getFirstName()%>#<%= user.getLastName() %>#<%= user.getBalance() %>
<% } %>