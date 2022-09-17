var billAmount = document.querySelector("#bill");
var cashRecieved = document.querySelector("#cash");
var btnCheck = document.querySelector("#btn-check");
var returnAmount = document.querySelector("#amount");
var notesNumber = document.querySelector("#notes");

function buttonHandler() {
    var input1 = billAmount.value;
    var input2 = cashRecieved.value;
    var result = input2 - input1;
    var count500=0;
    var count100=0;
    var count20=0; 
    var count10=0;
    var count5=0;
    var count1 = 0;
    var x;

    if (result < 0) {
        alert("Cash amount entered is lesser then the billing amount");
    } else {
        returnAmount.value = result;

        console.log(result);
        for (i = result; i >= 0; i = i - x) {
            if (i >=500) {
                x = 500;
                count500=count500+1;

            } else if (i >= 100) {
                x = 100;
                count100 = count100 + 1;
                
            } else if (i >= 20) {
                x = 20;
                count20 = count20 + 1;
                
            } else if (i >= 10) {
                x = 10;
                count10 = count10 + 1;
                
            } else if (i >= 5) {
                x = 5;
                count5 = count5 + 1;
                
            } else if (i >=1) {
                x = 1;
                count1 = count1 + 1;
                
            }
        }

    }
                
     notesNumber.value = "500    x "+ count500 +"\n100    x "+count100 +"\n20     x "+
     count20+"\n10     x "+count10+ "\nchange x "+ count1; 
};

btnCheck.addEventListener("click", buttonHandler);