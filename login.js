
function alertTemp(){
	document.getElementById("sign_in_temp").innerHTML = "DoneDoneDoneDoneDoneDone";
}


function scrollable(){
	window.scrollBy(0, -20);
}
// alert("Alert from the external file!!!")

function login(){
	var usrName = document.getElementById('input').value;
	var password = document.getElementById('password').value;

	if (usrName == "" && password == ""){
			window.alert("Please enter user name & password.");

	}else if (usrName == ""){
			window.alert("Please enter user name.");

	}else if (password == ""){
			window.alert("Please enter password.");

	}else if (usrName == "GOVIND" && password == "1234"){
			location.assign("https://www.upwork.com/freelancers/~016788a2b598c9589c?viewMode=1");
	}else{
			window.alert("Please enter valid user name & password.");
	}
	
}

function eye(){
	var passwordTemp = document.getElementById("password");
	// var iTemp = document.getElementByClass("fa fa-eye");
	if (passwordTemp.type === "password"){
		passwordTemp.type = "text";
		// iTemp = "fa fa-eye-slash";
	}else{
		passwordTemp.type = "password";
		// iTemp = "fa fa-eye";
	}
}


