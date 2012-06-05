

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Beans.User;

@WebServlet("/getRichest")
public class RichestUserController extends HttpServlet {
	private Collection<User> users;
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RichestUserController() {
        super();
        users = User.generateDefaultUserSet();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		User richestUser = null;
		for(User user : users) {
			if(richestUser == null || richestUser.getBalance()<user.getBalance()) {
				richestUser = user;
			}
		}
		if(request.getParameter("delay")!=null) {
			try {
				Thread.sleep(Integer.valueOf(request.getParameter("delay")));
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		if(richestUser!=null)
		{
			PrintWriter writer = response.getWriter();
			writer.println(
					"First Name: " + richestUser.getFirstName() + "<br/>" +
					"Last Name:" + richestUser.getLastName() + "<br/>" +
					"Account Balance: " + richestUser.getBalance());
		} else
			throw new RuntimeException("Richest User could not be found");
	}

}
