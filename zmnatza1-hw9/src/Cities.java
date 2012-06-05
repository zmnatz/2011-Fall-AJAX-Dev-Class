import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Data.CityDatabase;

@WebServlet("/cities")
public class Cities extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		response.setHeader("Cache-Control", "no-cache");
		response.setHeader("Pragma", "no-cache");
		
		String cityPrefix = request.getParameter("cityPrefix");
		List<String> cities = CityDatabase.findCities(cityPrefix);
		
		request.setAttribute("items", cities);
		String outputPage = "/WEB-INF/results/string-list.jsp";
		request.getRequestDispatcher(outputPage).include(request, response);
	}
}