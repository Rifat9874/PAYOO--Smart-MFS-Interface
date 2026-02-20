document.getElementById("cashout-btn").addEventListener("click", function() {
    //1. Get the aGENT NUmber & VALIDATE  input value
const cashoutNumber = getValueFromInput("cashout-number");
if(cashoutNumber.length !=11){
    alert("Please enter a valid 11-digit mobile number.");
    return; 
}


// console.log(cashoutNumber); 
    //2.GET HE AMOUNT, VALIDATE, CONVERT NUMBER
const cashoutAmount = getValueFromInput("cashout-amount");

// //3- GET the current balance,validate ,convert to number
//     const balanceElement = document.getElementById("balance");
//     const Balance = balanceElement.innerText;
//     console.log(Balance);
const CurrentBalance = getBalance();
    //4-calculate new balance
const newBalance = CurrentBalance - Number(cashoutAmount);
console.log("newBalance:", newBalance);
if (newBalance < 0){
    alert("Insufficient balance. Please enter a valid amount.");
    return;
}
const cashoutPin = getValueFromInput("cashout-pin");
if(cashoutPin === "1234"){
    alert("Cashout successful. Your new balance is: " + newBalance);
        setBalance(newBalance);

//  /1- get history container 
    const history = document.getElementById("history-container");
  //2 new div create
    const newHistory= document.createElement("div");
    //3. add INNER HTML to the div
    newHistory.innerHTML=`
    <div class="transcation-card p-5 bg-base-100">
        Cashout Success ${cashoutAmount} BDT from ${cashoutNumber} 
        at ${new Date().toLocaleString()} 
        New balance: ${newBalance}

    </div>
    
    `;
    //4. append the div to the history container
    history.append(newHistory);


  }else{
    alert("Invalid pin. Please try again.");
    return;
  }



});

/*


document.getElementById("cashout-btn").addEventListener("click", function() {
    //1. Get the aGENT NUmber & VALIDATE  input value
const cashoutNumberInput = document.getElementById("cashout-number");
const cashoutNumber=cashoutNumberInput.value;
console.log(cashoutNumber);
if(cashoutNumber.length !=11){
    alert("Please enter a valid 11-digit mobile number.");
    return; 
}

    //2.GET HE AMOUNT, VALIDATE, CONVERT NUMBER
const cashoutAmountInput = document.getElementById("cashout-amount");
const cashoutAmount=cashoutAmountInput.value;
console.log(cashoutAmount);



  //3- GET the current balance,validate ,convert to number
    const balanceElement = document.getElementById("balance");
    const Balance = balanceElement.innerText;
    console.log(Balance);

  //4-calculate new balance
const newBalance = Number(Balance) - Number(cashoutAmount);

if (newBalance < 0){
    alert("Insufficient balance. Please enter a valid amount.");
    return;
}
console.log("newBalance:", newBalance);

  //5-get  the pin and verify
 
  const cashoutPinInput = document.getElementById("cashout-pin");
  const cashoutPin = cashoutPinInput.value;
  if(cashoutPin === "1234"){
    alert("Cashout successful. Your new balance is: " + newBalance);
    balanceElement.innerText = newBalance;
  }else{
    alert("Invalid pin. Please try again.");
    return;
  }

  //5.1- if true, alert success and show new balance>SET BALANCE
  //5.2- if false, alert invalid pin> return

});

*/