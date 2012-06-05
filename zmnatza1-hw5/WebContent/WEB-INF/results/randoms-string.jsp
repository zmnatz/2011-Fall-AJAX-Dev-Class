<% 	double[] numbers = (double[]) request.getAttribute("numbers");
	for (int i=0;i<numbers.length; i++) { %><%=
		numbers[i] + (i<numbers.length-1 ? "#" : "")%><% 
} %>