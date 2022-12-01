const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const changeButton = document.querySelector("#change-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

changeButton.addEventListener("click", function validateBillAndCashAmounts(){
    if(billAmount.value>=0){
        if(cashGiven.value>=billAmount.value){
            const amountToBeReturned = cashGiven.value-billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            showErrorMessage("Do you want to wash plates??");
        }

    }
    else{
        showErrorMessage("Invalid Bill Amount");
    }

    function calculateChange(amt){
        for(let i=0;i<availableNotes.length;i++){
            const numberOfNotes = Math.trunc(amt/availableNotes[i]);
            amt = amt%availableNotes[i];
            noOfNotes[i].innerText = numberOfNotes;
        }

         
    }
    function showErrorMessage(msg){
        message.innerText = msg;
    }
})
