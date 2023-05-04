// =========== --- Login Button EventHandler --- ===========
document.getElementById("loginEnter-btn").addEventListener("click", function(){
    const loginArea = document.getElementById("loginArea")
    loginArea.style.display = "none"
    document.getElementById("transactionArea").style.display = "block"
})

// =========== --- Deposit Button EventHandler --- ===========
document.getElementById("deposit-btn").addEventListener("click", function(){
    // var depositValue = document.getElementById("deposit-input").value
    // var depositNumber = parseFloat(depositValue)
    var depositNumber = getInputNumber("deposit-input")

    // var currentDeposit = document.getElementById("current-deposit").innerText
    // var currentDepositNumber = parseFloat(currentDeposit)
    // var totalDeposit = depositNumber + currentDepositNumber
    // document.getElementById("current-deposit").innerText = totalDeposit
    updateSpanText("current-deposit", depositNumber )

    // var currentBalance = document.getElementById("current-balance").innerText
    // var currentBalanceNumber = parseFloat(currentBalance)
    // var totalBalance = depositNumber + currentBalanceNumber
    // document.getElementById("current-balance").innerText = totalBalance
    updateSpanText("current-balance", depositNumber)

    document.getElementById("deposit-input").value = ""
})
function updateSpanText(id, depositNumber){
    var current = document.getElementById(id).innerText
    var currentNumber = parseFloat(current)
    var totalAmount = depositNumber + currentNumber
    document.getElementById(id).innerText = totalAmount
}

// =========== --- Withdraw Button EventHandler --- ===========
    var withdrawBtn = document.getElementById("withdraw-btn").addEventListener("click", function(){
        var withdrawNumber = getInputNumber("withdraw-input")

        updateSpanText("current-withdraw", withdrawNumber)
        updateSpanText("current-balance", -1 * withdrawNumber)

    // var withdrawValue = document.getElementById("withdraw-input").value
    // var withdrawNumber = parseFloat(withdrawValue)

    // var currentWithdraw = document.getElementById("current-withdraw").innerText
    // var currentWithdrawNumber = parseFloat(currentWithdraw)
    // var totalWithdraw = withdrawNumber + currentWithdrawNumber
    // document.getElementById("current-withdraw").innerText = totalWithdraw

    document.getElementById("withdraw-input").value = ""
})
function getInputNumber(id){
    var amount = document.getElementById(id).value
    var amountNumber = parseFloat(amount)
    return amountNumber
}

