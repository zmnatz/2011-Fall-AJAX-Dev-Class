import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Data.UserDatabase;

/**
 * First page to load, sends the list of available users to the jsp page
 */
@WebServlet("/index.html")
public class HomeScreen extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		response.setHeader("Cache-Control", "no-cache");
	    response.setHeader("Pragma", "no-cache");
		request.setAttribute("users", UserDatabase.getUsers());
		request.getRequestDispatcher("WEB-INF/forms.jsp").forward(request,
				response);
	}
}