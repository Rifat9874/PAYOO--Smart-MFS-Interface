console.log("Login script loaded");

document.getElementById("login-btn").addEventListener("click", function() {
//1. Get the mobile number input value
const numberInput = document.getElementById("input-number");
const contactNumber=numberInput.value;
console.log( contactNumber);
//2. get the pin input 
const inputPin = document.getElementById("input-pin");
const pinNumber=inputPin.value;
console.log(pinNumber);         


//3.match pin and mobile number with the predefined values
if(contactNumber === "01993182070" && pinNumber === "1234"){
    alert("Login successful");

    // window.location.replace("/home.html");
        window.location.assign("/home.html");

    
    // Redirect to homepage
    // Redirect to homepage or perform other actions
  }else{
    alert("Invalid mobile number or pin. Please try again.");
    return;
  }
//4. If invalid, show an error message
  //3-1. true:::>> alert >homepage
  //3-2. false:::>> alert > try again
});