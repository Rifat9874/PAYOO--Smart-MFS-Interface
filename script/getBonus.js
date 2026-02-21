// Get Bonus JavaScript

document.getElementById('bonus-btn').addEventListener('click', function() {
    const couponInput = document.getElementById('bonus-coupon');
    const couponCode = couponInput.value;
    
    // Get current balance - FIXED: change 'balance-amount' to 'balance'
    const balanceElement = document.getElementById('balance');
    let currentBalance = parseFloat(balanceElement.innerText.replace('$', ''));
    
    // Simple validation
    if (couponCode === '1234') {
        // Add $100 bonus
        const bonusAmount = 100;
        const newBalance = currentBalance + bonusAmount;
        balanceElement.innerText = newBalance; // Don't add $ here since it's in the span
        
        alert('Bonus added successfully!');
        couponInput.value = '';

        // Get history container 
        const history = document.getElementById("history-container");
        // Create new div
        const newHistory = document.createElement("div");
        // Add INNER HTML to the div
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 rounded-2xl shadow">
                Bonus Added Success: $${bonusAmount} bonus added from coupon ${couponCode}
                at ${new Date().toLocaleString()}.
                New balance: $${newBalance}
            </div>
        `;
        // Append the div to the history container
        history.append(newHistory);

    } else {
        alert('Invalid coupon code');
    }
});