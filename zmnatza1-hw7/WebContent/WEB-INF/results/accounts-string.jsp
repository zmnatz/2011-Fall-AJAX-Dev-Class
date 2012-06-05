<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"
%>Customer ID#First Name#Last Name#Balance
<c:forEach var="user" items="${users}">
${user.userId}#${user.firstName}#${user.lastName}#${user.balance}
</c:forEach>