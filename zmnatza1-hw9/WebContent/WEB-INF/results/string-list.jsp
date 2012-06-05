<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<ul>
<c:forEach var="item" items="${items}">
  <li>${item}</li>
</c:forEach>
</ul>