import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Data.UserDatabase;

import java.util.List;

@WebServlet("/users")
public class Users extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

    protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		response.setHeader("Cache-Control", "no-cache");
		response.setHeader("Pragma", "no-cache");
		String userIdPrefix = request.getParameter("userId");
		List<String> users = UserDatabase.getUserIds(userIdPrefix);
		request.setAttribute("items", users);
		String outputPage = "/WEB-INF/results/string-list.jsp";
		request.getRequestDispatcher(outputPage).include(request, response);
	}
}
