/*
*
* Jordan Cook - Assignment 1
*
*/

function calcTotal() {
	// Get the values from all the form fields
	var product = document.getElementById("product").value;
	var quantity = document.getElementById("quantity").value;
	var unit_price = document.getElementById("unit_price").value;
	// Divide discount_rate by 100 to get percentage
	var discount_rate = document.getElementById("discount_rate").value/100;
	var order_date = document.getElementById("order_date").value;
	var first_name = document.getElementById("first_name").value;
	var last_name = document.getElementById("last_name").value;
	var payment_type = document.getElementById("payment_type").value;
	var card_number = document.getElementById("card_number").value;
	var security_code = document.getElementById("security_code").value;

	// Calculate discounted amount
	var discounted_amount = unit_price * discount_rate;

	// Calculate order total based on quantity, price, and discount
	var order_total = quantity * (unit_price - discounted_amount);

	// Output statement with name and order total
	var stateTotal = "Thanks for your order of " + product + " " + first_name + " " + last_name + "! Your total is $" + order_total + ".";
	document.getElementById("output").innerHTML = stateTotal;
}

function init() {
	var order_button = document.getElementById("order_button");
	order_button.onclick=calcTotal;
}

window.onload = init;