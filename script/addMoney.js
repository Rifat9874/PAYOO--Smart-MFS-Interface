document.getElementById("add-money-btn").addEventListener("click", function() {

// 1-bank account get
const bankAccount=getValueFromInput("add-money-bank");
if(bankAccount==="Select a Bank"){
    alert("Please Select a Bank");
    return; 

}

// 2-get bank account number
const account=getValueFromInput("add-money-number");
if(account.length != 11){
    alert("Please enter a valid bank account number.");
    return; 
}

// 3-get amount 
const amount=getValueFromInput("add-money-amount");
const newBalance = getBalance()+ Number(amount);
const pin=getValueFromInput("add-money-pin");
if(pin === "1234"){
    alert(`Money added successful from ${bankAccount} at ${new Date()} account number ${account}. Your new balance is: ${newBalance}`);
        setBalance(newBalance);

  //1- get history container 
    const history = document.getElementById("history-container");
  //2 new div create
    const newHistory= document.createElement("div");
    //3. add INNER HTML to the div
    newHistory.innerHTML=`
    <div class="transaction-card p-5 bg-base-100">
        Add Money Success ${amount} BDT from ${bankAccount} 
        at ${new Date().toLocaleString()} account number ${account}.
        New balance: ${newBalance}

    </div>
    
    `;
    //4. append the div to the history container
    history.append(newHistory);


  }else{
    alert("Invalid pin. Please try again.");
    return;
  }



// if(amount <= 0){
//     alert("Please enter a valid amount.");
//     return;             


// setBalance(newBalance);
// alert("Money added successfully. Your new balance is: " + newBalance);

});