package Beans;
/**
 * User Object: Stores user info
 */
public class User {
	private String userId;
	private String firstName;
	private String lastName;
	private double balance;

	public User(String userId, String firstName, String lastName, double balance) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.balance = balance;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getName() {
		return getFirstName() + " " + getLastName();
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}
}
