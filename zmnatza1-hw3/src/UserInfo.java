import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Beans.User;
import Data.UserDatabase;
/**
 * User Info Page
 * Loads a user based on either the userId or a last and first name.
 * Sends this info back to the client as plain text
 */
@WebServlet("/userInfo")
public class UserInfo extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		response.setHeader("Cache-Control", "no-cache");
	    response.setHeader("Pragma", "no-cache");
		String userId = request.getParameter("userId");
		User currentUser;
		// Determine if the client sent the userId or a combination of the first and last name
		if (userId != null)
			currentUser = UserDatabase.getUser(userId);
		else {
			currentUser = UserDatabase.getUser(
					request.getParameter("firstName"),
					request.getParameter("lastName"));
		}
		PrintWriter writer = response.getWriter();
		//Generate response text, if user found, send customer info, else, respond with an error.
		if (currentUser != null) {
			writer.println("Customer ID: " + currentUser.getUserId() + "<br/>"
					+ "First Name: " + currentUser.getFirstName() + "<br/>"
					+ "Last Name: " + currentUser.getLastName() + "<br/>"
					+ "Account Balance: $" + currentUser.getBalance());
		} else {
			writer.println("Error: Could not retrieve customer info");
		}
	}
}