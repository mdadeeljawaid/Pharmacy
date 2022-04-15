const form = document.getElementById("form");
const ShopName = document.getElementById("ShopName");
const ShopAddress = document.getElementById("ShopAddress");
const ShopRegNo = document.getElementById("ShopRegNo");
const ShopPincode = document.getElementById("ShopPincode");
const ShopContactNo = document.getElementById("ShopContactNo");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("Confirm Password");


//Show input error message
function ShowError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Show input success
function ShowSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Check email
function CheckEmail(input) {
  const char = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (char.test(input.value.trim())) {
    ShowSuccess(input);
  }else {
    ShowError(input, "Enter Valid Email");
  }
}

function CheckPincode(input) {
    const str = /^\d{6}$/;
    if(str.test(input.value.trim()))
    {
        ShowSuccess(input);
    }
    else {
    ShowError(input, "  Enter Valid ShopPincode ");
     }
    
}
   function CheckPhonenNo(input) {
    const str = /^\d{10}$/;
    if(str.test(input.value.trim()))
    {
        ShowSuccess(input);
    }
    else {
    ShowError(input, "ShopContactNo is not valid");
     }
    
} 

function CheckAddress(input) {
  const str = /([A-Z][a-z]+\s?)+,\s[A-Z]{2}\s\d{5}-?\d{4}?/;
    if(str.test(input.value.trim()))
    {
        ShowSuccess(input);
    }
    else {
    ShowError(input, "ShopAddress is not valid");
     }
    
} 


    
// function isShopPincode(str) 
// {
//   return /^\d{5}(-\d{4})?$/.test(str);
// }

// function validateInput() 
// {
//   console.log("validateInput");
//   let Pincode = document.getElementById("ShopPincode").value;
//   let message = "";
//   if (isShopPincode(Pincode)) 
//   {
//     message = "Valid Pincode";
//   } else {
//     message = "Invalid Pincode";
//   }
//   document.getElementById("ShopPincode").innerHTML = message;
// }



// function validateform(){  
// 	var name=document.fullName.name.value;  
// 	var password=document.fullName.password.value;  
	  
// 	if (name==null || name==""){  
// 	  alert("Name can't be blank");  
// 	  return false;  
// 	}else if(password.length<6){  
// 	  alert("Password must be at least 6 characters long.");  
// 	  return false;  
// 	  }  
// 	}  
// //     JavaScript Retype Password Validation

// 	function matchpass() {
// 		var firstpassword = document.f1.password.value;
// 		var secondpassword = document.f1.password2.value;

// 		if (firstpassword == secondpassword) {
// 			return true;
// 		} else {
// 			alert("password must be same!");
// 			return false;
// 		}
// 	}
	
// 	//JavaScript email validation
// 	function validateemail()  
// 	{  
// 	var x=document.myform.email.value;  
// 	var atposition=x.indexOf("@");  
// 	var dotposition=x.lastIndexOf(".");  
// 	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
// 	  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
// 	  return false;  
// 	  }  
// 	}  
// 	//PIN CODE VALIDATION 
// 	function valid(){
		
// 		var pin_code=document.getElementById("ShopPincode");
// 		var pat1=/^\d{6}$/;
		
// 		if(!pat1.test(pin_code.value))
// 		{
// 		alert("Pin code should be 6 digits ");
// 		pin_code.focus();
// 		return false;
// 		}
// 		}

// 		//Validation ShopContactNo
// 	function phonenumber(inputtxt)
// {
//   var phoneno = /^\d{10}$/;
//   if(inputtxt.value.match(phoneno))
//   {
//       return true;
//   }
//   else
//   {
//      alert("Not a valid Phone Number");
//      return false;
//   }
//   }

	
	
//  </script> -->


// <!-- <script type="text/javascript">

// let id = (id) => document.getElementById(id);

// let classes = (classes) => document.getElementsByClassName(classes);

// let username = id("fullName"),
//   email = id("email"),
//   password = id("psw"),
//   form = id("form"),
//   errorMsg = classes("error"),
//   successIcon = classes("success-icon"),
//   failureIcon = classes("failure-icon");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   engine(username, 0, "Username cannot be blank");
//   engine(email, 1, "Email cannot be blank");
//   engine(password, 2, "Password cannot be blank");
// });

// let engine = (id, serial, message) => {
//   if (id.value.trim() === "") {
//     errorMsg[serial].innerHTML = message;
//     id.style.border = "2px solid red";

//     // icons
//     failureIcon[serial].style.opacity = "1";
//     successIcon[serial].style.opacity = "0";
//   } else {
//     errorMsg[serial].innerHTML = "";
//     id.style.border = "2px solid green";

//     // icons
//     failureIcon[serial].style.opacity = "0";
//     successIcon[serial].style.opacity = "1";
//   }
// };

//  -->
 
//  <!-- function validateform(){  
// 	var name=document.myform.name.value;  
// 	var password=document.myform.password.value;  
	  
// 	if (name==null || name==""){  
// 	  alert("Name can't be blank");  
// 	  return false;  
// 	}else if(password.length<6){  
// 	  alert("Password must be at least 6 characters long.");  
// 	  return false;  
// 	  }  
// 	}  
//   -->


// </script>
 
 
//  <!-- function seterror(id, error){
//  //sets error inside tag of id 
//  element = document.getElementById(id);
//  element.getElementsByClassName('formerror')[0].innerHTML = error;

// }

// function validateForm(){
//  var returnval = true;
//  clearErrors();

//  //perform validation and if validation fails, set the value of returnval to false
//  var name = document.forms['addSeller']["fullName"].value;
//  if (name.length<5){
//      seterror("name", "*Length of name is too short");
//      returnval = false;
//  }

//  if (name.length == 0){
//      seterror("name", "*Length of name cannot be zero!");
//      returnval = false;
//  }

//  var email = document.forms['addSeller']["emailId"].value;
//  if (email.length>15){
//      seterror("email", "*Email length is too long");
//      returnval = false;
//  }

 

//  var password = document.forms['addSeller']["password"].value;
//  if (password.length < 6){

    
//      seterror("pass", "*Password should be atleast 6 characters long!");
//      returnval = false;
//  }

//  var cpassword = document.forms['addSeller']["repassword"].value;
//  if (cpassword != password){
//      seterror("cpass", "*Password and Confirm password should match!");
//      returnval = false;
//  }

//  return returnval;
// }

// function validateform(){  
// var name=document.myform.name.value;  
// var password=document.myform.password.value;  
  
// if (name==null || name==""){  
//   alert("Name can't be blank");  
//   return false;  
// }else if(password.length<6){  
//   alert("Password must be at least 6 characters long.");  
//   return false;  
//   }  
// }  




// 	 function seterror(id, error){
// 	    //sets error inside tag of id 
// 	    element = document.getElementById(id);
// 	    element.getElementsByClassName('formerror')[0].innerHTML = error;

// 	}

// 	function validateForm(){
// 	    var returnval = true;
// 	    clearErrors();

// 	    //perform validation and if validation fails, set the value of returnval to false
// 	    var name = document.forms['addSeller']["fullName"].value;
// 	    if (name.length<5){
// 	        seterror("name", "*Length of name is too short");
// 	        returnval = false;
// 	    }

// 	    if (name.length == 0){
// 	        seterror("name", "*Length of name cannot be zero!");
// 	        returnval = false;
// 	    }

// 	    var email = document.forms['addSeller']["emailId"].value;
// 	    if (email.length>15){
// 	        seterror("email", "*Email length is too long");
// 	        returnval = false;
// 	    }

	    

// 	    var password = document.forms['addSeller']["password"].value;
// 	    if (password.length < 6){

	       
// 	        seterror("pass", "*Password should be atleast 6 characters long!");
// 	        returnval = false;
// 	    }

// 	    var cpassword = document.forms['addSeller']["repassword"].value;
// 	    if (cpassword != password){
// 	        seterror("cpass", "*Password and Confirm password should match!");
// 	        returnval = false;
// 	    }

// 	    return returnval;
// 	}

	


  
 
 
 
 
// 		function ValidateEmail(inputText) {
// 			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// 			if (inputText.value.match(mailformat)) {
// 				document.form1.text1.focus();
// 				return true;
// 			} else {
// 				alert("You have entered an invalid email address!");
// 				document.form1.text1.focus();
// 				return false;
// 			} 
// 		}

// 		  function SignUpSeller () {
// 		   var name = document.getElementById("fullname").value;
// 		   var email = document.getElementById("email").value;
// 		   var password = document.getElementById("psw").value;
// 		   var confirm = document.getElementById("confirm").value;
// 		   var message = document.getElementById("message").value;
// 		   var error_message = document.getElementById("error_message");
// 		   var say;
// 		   error_message.style.padding = "10px";

// 		   if (fullname.length == 0 || fullname.length > 15) {
// 		       say = "Please enter name not greater than 15 words";
// 		       error_message.innerHTML = say;
// 		      return false;
		       
// 		   }
		   
// 		   if (email.indexOf("@") == -1 || email.length < 11) {
// 		       say = "Please enter a valid email address";
// 		       error_message.innerHTML = say;
// 		      return false;
		       
// 		   }
// 		   if (password.length == 0 || password.length < 8 || password.search(/[A-Z]/) == -1 || password.search(/[0-9]/) == -1 || password.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\'\"\:\;\<\>\.\,]/) == -1 ) {
// 		       say = "Password must be at least 8 characters and must contain at least 1 capital letter, 1 number and 1 special character";
// 		       error_message.innerHTML = say;
// 		      return false;
		       
// 		   }
// 		   if (confirm !== password) {
// 		       say = "Password does not match";
// 		       error_message.innerHTML = say;
// 		      return false;
		       
// 		   }
		   
		   
// 		   alert("Form sent successfully")
// 		   return true;
// 		}
		

		 


 

//  -->







function CheckRequired(inputErr) {
  inputErr.forEach(function(input){
    if (input.value.trim() === "") {
      ShowError(input, `${getFieldName(input)} is required`);
    }else {
      ShowSuccess(input);
    }
  });
}

function CheckLenght(input, min, max) {
  if (input.value.length < min) {
    ShowError(input, `${getFieldName(input)} must be at least ${min} characters`);
  }else if(input.value.length > max){
    ShowError(input, `${getFieldName(input)} must be less then ${max} characters`);
  }else {
    ShowSuccess(input);
  }
}


function CheckPasswordsMatch(input1,input2) {
  if (input1.value !== input2.value) {
    ShowError(input2, "Password do not match");
  }
}



function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


form.addEventListener('submit', function(e){
  e.preventDefault();

  CheckRequired([ShopName,ShopAddress, ShopAddress,ShopRegNo,ShopPincode,ShopContactNo,email, password, password2 ]);
    CheckLenght(ShopName, 3, 15);
  CheckPhonenNo(ShopContactNo);
  CheckAddress(ShopAddress);
  CheckPincode(ShopPincode);
  CheckLenght(password, 8, 25);
  CheckEmail(email);
  CheckPasswordsMatch(password, password2);
});


            //  function validation() {
            //     var ShopName = document.getElementById('ShopName').value;
            //     var email = document.getElementById('email').value;
            //      var password = document.getElementById('password').value;
            //      var Confirmpassword = document.getElementById('Confirmpassword').value;
            //      var mobilenumber = document.getElementById('ShopContactNo').value;
                 

            //      if (ShopName == "") {
            //      document.getElementById('ShopName').innerHTML = " ** Please fill the ShopName field";
            //           return false;
            //       }
            //      if (((ShopName.length <= 3) || (ShopName.length>= 20))) {

                 
            //      document.getElementById('ShopName').innerHTML = " ** ShopName should be between 2 to 20 characters "
            //      } else if (!isNaN(ShopName)) {
            //      document.getElementById('ShopName').innerHTML = " ** Only Characters are allowed"

            //       }


            //      if (password == "") {
            //          document.getElementById('Password').innerHTML = " ** Enter Password"
            //          return false;
            //      } else if (password == ShopName) {
            //          document.getElementById('Password').innerHTML = " ** Password cant'be your ShopName"
            //          return false;
            //      } else if ((password.length <= 8) || (password.length >= 20)) {
            //          document.getElementById('Password').innerHTML =" ** user password should be between 6 to 20 characters "
            //          return false;
            //      }

            //      if (Confirmpassword == "") {
            //          document.getElementById('Confirmpasswordid').innerHTML = " ** Enter ConfirmPassword"
            //          return false;
            //      } else if (password != Confirmpassword) {
            //          document.getElementById('Confirmpasswordid').innerHTML = " ** Password does'nt Match"
            //          return false;
            //      }

            //      if (mobilenumber == "") {
            //          document.getElementById("ShopContactNo").innerHTML = " ** Enter Mobile Number";
            //          return false;
            //      } else if (mobilenumber.length != 10) {
            //          document.getElementById("ShopContactNo").innerHTML = " ** Mobile Number Should be 10 digit "
            //          return false;
            //      } else if (isNaN(mobilenumber)) {
            //          document.getElementById('ShopContactNo').innerHTML = " ** Only digit are Accepted"
            //          return false;
            //      }


            //      if (email == "") {
            //          document.getElementById('email').innerHTML = " ** Enter Email ID"
            //          return false;
            //      } else if (email.indexOf('@') <= 0) {
            //          document.getElementById('email').innerHTML = " ** @ Invalid Position"
            //          return false;
            //      } else if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
            //          document.getElementById('email').innerHTML = " ** . Invalid Position"
            //          return false;
            //      }
                 
            //  }
         
