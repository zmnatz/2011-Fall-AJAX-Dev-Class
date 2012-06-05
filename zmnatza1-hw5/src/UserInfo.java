import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Beans.User;
import Data.UserDatabase;

/**
 * User Info Page Loads a list of users based on the userId. Sends this info
 * back to the client as xml, json or plain text
 */
@WebServlet("/userInfo")
public class UserInfo extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		//Set Header Info
		response.setHeader("Cache-Control", "no-cache");
		response.setHeader("Pragma", "no-cache");

		//Load users
		String[] userIds = request.getParameterValues("userId");
		List<User> users = new ArrayList<User>();
		for (String userId : userIds) {
			User user = UserDatabase.getUser(userId);
			if (user != null)
				users.add(user);
		}
		request.setAttribute("users", users);

		//Determine view based on the format sent by client
		String format = request.getParameter("format");
		String outputPage = null;
		if ("xml".equals(format)) {
			response.setContentType("text/xml");
			outputPage = "/WEB-INF/results/accounts-xml.jsp";
		} else if ("json".equals(format)) {
			response.setContentType("application/json");
			outputPage = "/WEB-INF/results/accounts-json.jsp";
		} else if ("string".equals(format)) {
			response.setContentType("text/plain");
			outputPage = "/WEB-INF/results/accounts-string.jsp";
		}
		if (outputPage != null)
			request.getRequestDispatcher(outputPage).include(request, response);
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}