package Data;

import java.util.Arrays;
import java.util.Collection;

import Beans.User;

/**
 * Mock user database. Basis for functions like getting a user and getting the
 * hard coded default users.
 */
public class UserDatabase {
	private static Collection<User> users = Arrays.asList(new User("a1234",
			"James", "Gosling", 20), new User("a1235", "Jesse James",
			"Garrett", 30), new User("a1236", "John", "Smith", 40), new User(
			"a1237", "Bob", "Roberts", 50));

	/**
	 * Loads a user based on the userId
	 * @param userId The user ID of the customer
	 * @return The user object
	 */
	public static User getUser(String userId) {
		for (User user : users)
			if (user.getUserId().equals(userId))
				return user;
		return null;
	}
	

	/**
	 * Loads a user based on the first and last name
	 * @param firstName First name of the user
	 * @param lastName Last name of the user
	 * @return The user object
	 */
	public static User getUser(String firstName, String lastName) {
		for (User user : users)
			if (user.getFirstName().equals(firstName)
					&& user.getLastName().equals(lastName))
				return user;
		return null;
	}

	/**
	 * @return The list of users hardcoded into the system
	 */
	public static Collection<User> getUsers() {
		return users;
	}
}
