<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:forEach var="item" items="${users}">
<ul>
	<li>Customer ID: ${item.userId}</li>
	<li<c:if test="${item.firstName == 'Undefined'}"> class="undefined"</c:if>>
		First Name: ${item.firstName}</li>
	<li<c:if test="${item.lastName == 'Undefined'}"> class="undefined"</c:if>>
		Last Name: ${item.lastName}</li>
	<li<c:if test="${item.balance == 0.0}"> class="undefined"</c:if>>
		Balance: ${item.balance}</li>
</ul>
</c:forEach>