var Employee = Class.create(Person, {
	initialize : function($super, firstName, lastName, address, employeeID) {
		$super(firstName, lastName, address);
		Object.extend(this, Alertable);
		this.employeeID = employeeID;
	}
});
