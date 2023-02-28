function checkAge_Ternary(age) {
	
    return (age > 18) ? true :
		confirm('Родители разрешили?');
		
}

function checkAge_OrLogical(age) {
	
    return (age > 18) || confirm('Родители разрешили?');
		
}