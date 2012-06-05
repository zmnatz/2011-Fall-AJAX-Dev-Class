<?xml version="1.0" encoding="UTF-8"?>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<users>
	<headings>
		<heading>Customer ID</heading>
		<heading>First Name</heading>
		<heading>Last Name</heading>
		<heading>Balance</heading>
	</headings>
<c:forEach var="user" items="${users}">
	<user>
		<userId>${user.userId}</userId>
		<firstName>${user.firstName}</firstName>
		<lastName>${user.lastName}</lastName>
		<balance>${user.balance}</balance>
	</user>
</c:forEach>
</users>