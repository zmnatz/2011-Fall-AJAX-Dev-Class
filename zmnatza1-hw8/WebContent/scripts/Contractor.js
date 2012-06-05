var Contractor = Class.create(Person, {
	initialize : function($super, firstName, lastName, address, contractorID,contractingCompany) {
		$super(firstName, lastName, address);
		Object.extend(this, Alertable);
		this.contractorID = contractorID;
		this.contractingCompany = contractingCompany;
	}
});
