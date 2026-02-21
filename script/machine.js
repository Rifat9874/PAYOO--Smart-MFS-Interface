console.log("Machine script loaded");
// machine id-> input value
function  getValueFromInput(id){
    const input = document.getElementById(id);
    const Value = input.value;
    console.log(id,Value);
    return Value;

}

// machine -> Balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const Balance = balanceElement.innerText;
    console.log("Current Balance:", Number(Balance));
    return Number(Balance);
}

// machine value -> set balance?
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
    console.log("Balance updated to:", value);
}

//   machine id > hide ALL >SHOW ID 
function showOnly(id){

    const addMoney=document.getElementById("add-money");
    const cashout=document.getElementById("cashout");
    const history=document.getElementById("history");
    const transfer=document.getElementById("transfer-money");
    const getBonus=document.getElementById("get-bonus");
    const payBill=document.getElementById("pay-bill");
    // console.log(`addMoney: ${addMoney}, cashout: ${cashout}`);
    // const transaction=document.getElementById("transaction"); 
    
    //hide all
    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");
    transfer.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    // transaction.classList.add("hidden");
    //id element show
    const selected=document.getElementById(id);
    selected.classList.remove("hidden");
    

}