$( document ).ready(function() {

	const currencyData = "http://data.fixer.io/api/latest?access_key=ec8ebe2832af80184de7c59ef611cc18"
	let currencyId = "";
	let value = 0;
	let result = 0;
	function convertCurrency(event) {
	  if ('type' in event.target && event.target.type === 'button') {
	    $.get(currencyData, (response) => {
	    	switch(event.target.value){
	    		case "EUR":
	    			value = response["rates"]["EUR"];
	    			currencyId = " EUR";
	    			break;
	    		case "GBP":
					value = response["rates"]["GBP"];
					currencyId = " GBP";
	    			break;
	    		case "CNY":
	    			value = response["rates"]["CNY"];
	    			currencyId = " CNY";
	    			break;
	    		case "JPY":
	    			value = response["rates"]["JPY"];
	    			currencyId = " JPY";
	    			break;
	    		default:
	    			console.log("button doesn't exist");
	    			break;
	    	}
	    	result = (value/response["rates"]["USD"]) * $("#inputSum").val();
	    	$("#output_amount").append("<p>" + result + currencyId + "</p>");
	     });
	  }
	}

	document.body.addEventListener('click', convertCurrency);

});