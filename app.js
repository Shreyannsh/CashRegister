var billAmount = document.querySelector("#bill");
var cashRecieved = document.querySelector("#cash");
var btnCheck = document.querySelector("#btn-check");
var returnAmount = document.querySelector("#amount");
var noOfNotes = document.querySelectorAll(".noOfNotes");
var nextButton = document.querySelector("#btn-next");
var screen1 = document.querySelector("#screen1");
var screen2 = document.querySelector("#screen2");
var screen3 = document.querySelector("#screen3");
var error = document.querySelector("#error");

nextButton.addEventListener("click", nextHandler);

function nextHandler() {
    if (Number(billAmount.value) > 0) {

        error.style.display = "none";
        nextButton.style.display = "none";
        screen2.style.display = "block";
    } else {
        showError("Enter valid amount");
    }
};

function showError(text) {
    error.style.display = "block";
    error.innerText = text;
    screen3.style.display = "none";      
}


function checkHandler() {
    hideError();
    clearNoOfNotes();

    var input1 = billAmount.value;
    var input2 = cashRecieved.value;
    var result = input2 - input1;

    var count2000 = 0;
    var count500 = 0;
    var count100 = 0;
    var count20 = 0;
    var count10 = 0;
    var count5 = 0;
    var count1 = 0;
    var x;

    if (result < 0) {

        showError("Enter valid cash amount");

    }
    if (result == 0) {
        showError("Bill settled. Nothing to be returned");
    } else {

        // calculating no. of notes
        screen3.style.display = "block";
        for (i = result; i >= 0; i = i - x) {

            if (i >= 2000) {
                x = 2000;
                count2000 = count2000 + 1;
                noOfNotes[0].innerText = count2000


            } else if (i >= 500) {
                x = 500;
                count500 = count500 + 1;
                noOfNotes[1].innerText = count500

            } else if (i >= 100) {
                x = 100;
                count100 = count100 + 1;
                noOfNotes[2].innerText = count100

            } else if (i >= 20) {
                x = 20;
                count20 = count20 + 1;
                noOfNotes[3].innerText = count20

            } else if (i >= 10) {
                x = 10;
                count10 = count10 + 1;
                noOfNotes[4].innerText = count10

            } else if (i >= 5) {
                x = 5;
                count5 = count5 + 1;
                noOfNotes[5].innerText = count5

            } else if (i >= 1) {
                x = 1;
                count1 = count1 + 1;
                noOfNotes[6].innerText = count1

            }

        }

    }

};

function clearNoOfNotes() {
    for (let notes of noOfNotes) {
        notes.innerText = "";
    }
};

function hideError() {
    error.style.display = "none";
}

btnCheck.addEventListener("click", checkHandler);