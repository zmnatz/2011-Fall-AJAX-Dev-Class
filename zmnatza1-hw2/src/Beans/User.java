package Beans;

import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;

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
	
	public static Collection<User> generateDefaultUserSet()
	{
		Collection<User> users = new HashSet<User>();
        users.addAll(Arrays.asList(
       		 new User("a1234","James","Gosling",20),
       		 new User("a1235","Jesse James","Garrett",30),
       		 new User("a1236","John","Smith",40),
       		 new User("a1237","Bob","Roberts",50)
       		 ));
        return users;
	}
}
