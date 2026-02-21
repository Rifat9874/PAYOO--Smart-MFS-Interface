document.getElementById("transfer-money-btn").addEventListener("click", function() {

// 1-get bank account number
const account=getValueFromInput("transfer-money-number");
if(account.length != 11){
    alert("Please enter a valid bank account number.");
    return; 
}

// 2-get amount 
const amount=getValueFromInput("transfer-money-amount");
const newBalance = getBalance() - Number(amount); // Changed from + to - for transfer
const pin=getValueFromInput("transfer-money-pin");

if(pin === "1234"){
    // Check if sufficient balance
    if(Number(amount) > getBalance()){
        alert("Insufficient balance!");
        return;
    }
    
    // Check if amount is valid
    if(Number(amount) <= 0){
        alert("Please enter a valid amount!");
        return;
    }
    
    alert(`Money transferred successfully to account ${account} at ${new Date()}. Amount: ${amount} BDT. Your new balance is: ${newBalance}`);
    setBalance(newBalance);

    // Get history container 
    const history = document.getElementById("history-container");
    // Create new div
    const newHistory= document.createElement("div");
    // Add INNER HTML to the div
    newHistory.innerHTML=`
    <div class="transaction-card p-5 bg-base-100 rounded-2xl shadow">
        Transfer Money Success: ${amount} BDT transferred to account ${account} 
        at ${new Date().toLocaleString()}.
        New balance: ${newBalance} BDT
    </div>
    `;
    // Append the div to the history container
    history.append(newHistory);

}else{
    alert("Invalid pin. Please try again.");
    return;
}

});