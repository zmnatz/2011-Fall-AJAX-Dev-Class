import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import Beans.User;
import Data.UserDatabase;

@WebServlet("/userInfo")
public class UserInfo extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//Set Header Info
		response.setHeader("Cache-Control", "no-cache");
		response.setHeader("Pragma", "no-cache");

		//Load users
		List<User> users = UserDatabase.getUsers(request.getParameterValues("userId"));
		
		//Output Users
		if("HTML".equals(request.getParameter("format")))
		{
			response.setContentType("text/HTML");
			String outputPage = "/WEB-INF/results/user-info.jsp";
			request.setAttribute("users",users);
			request.getRequestDispatcher(outputPage).include(request, response);
		} else {
			response.setContentType("application/json");
			response.getWriter().print(new JSONArray(users));
		}
	}
}
