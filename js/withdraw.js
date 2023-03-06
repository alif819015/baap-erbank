//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // steo-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    console.log(newWithDrawAmount);

    withdrawField.value = '';
    
    if(isNaN(newWithDrawAmount)){
        alert('Please provide a valid number')
        return;
    }

    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
     
    //step-4:
    // const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    // withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5:
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

if( newWithDrawAmount > previousBalanceTotal){
    alert('Baper bank e eto taka nai');
    return;
}

//step-4:
const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;

//step-6:
const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
balanceTotalElement.innerText = newBalanceTotal;
    // step-7

    // withdrawField.value = '';


})