<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
{ 
	headings: ["Customer ID", "First Name", "Last Name", "Balance"],
	users: [
<c:forEach var="user" items="${users}" varStatus="status">
		['${user.userId}','${user.firstName}','${user.lastName}','${user.balance}']
		<c:if test="${!status.last}">,</c:if>
</c:forEach>
	]
}