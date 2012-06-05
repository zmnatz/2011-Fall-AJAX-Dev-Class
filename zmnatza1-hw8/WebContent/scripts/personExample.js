var people = [
 new Person('John','Smith','Rockville, MD'),
 new Employee('Bob','Johnson','Columbia, MD','a1234'),
 new Contractor('Jim','Ryan','Baltimore, MD','a1235','Foo Bar Consulting')
];

/**
 * Show the properties for the specified Person
 * @param PersonNum The number in the array above
 * @param outputEl The HTML element to output the results to
 */
function showPerson(PersonNum,outputEl){
	$(outputEl).update(buildTable([people[PersonNum]]));
}

/**
 * Call the alert method of the specified Person
 * Throws an error if the person does not have the alert method
 * @param PersonNum The number in the array above to alert
 */
function alertPerson(PersonNum){
	people[PersonNum].alert();
}

