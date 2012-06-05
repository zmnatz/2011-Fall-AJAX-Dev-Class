import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Data.Utilities;

/**
 * Generates a given number of random numbers as sent by the client
 */
@WebServlet("/getRandoms")
public class GetRandoms extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		response.setHeader("Cache-Control", "no-cache");
		response.setHeader("Pragma", "no-cache");

		try {
			request.setAttribute("numbers", Utilities.generateRandoms(Integer
					.parseInt(request.getParameter("numRandoms"))));
			request.getRequestDispatcher("/WEB-INF/results/randoms-string.jsp")
					.include(request, response);
		} catch (NumberFormatException e) {
		} catch (NullPointerException e) {
		}
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
