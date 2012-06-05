import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Beans.User;

@WebServlet("/userInfo")
public class UserInfoController extends HttpServlet {
	private Collection<User> users;
	
    public UserInfoController() {
    	 super();
         users = new HashSet<User>();
         User james = new User("1234","James","Gosling",20);
         User jesse = new User("1235","Jesse James","Garrett",30);
         users.addAll(Arrays.asList(james,jesse));
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = request.getParameter("userId");
		User currentUser = null;
		for(User user : users)
		{
			if(user.getUserId().equals(userId))
			{	
				currentUser = user;
				break;
			}
		}
		response.setContentType("text/html");
		PrintWriter writer = response.getWriter();
		writer.println("<!DOCTYPE html><body>");
		if(currentUser!=null)
		{
			writer.println(currentUser.getName() + "<br/>Account Balance: " + currentUser.getBalance());
		} else {
			writer.println("Error: Unknown ID");
		}
		writer.println("</body></html>");
	}
}
