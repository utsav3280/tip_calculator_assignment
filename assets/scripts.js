let billAmount;
let tip;
let persons;
let bill = 0;

document.getElementById("bill-amount-field").addEventListener("change", (e) => { getBill(e) });
document.querySelector("#tip5").addEventListener("click", (e) => { tipFunc(e) });
document.querySelector("#tip10").addEventListener("click", (e) => { tipFunc(e) });
document.querySelector("#tip15").addEventListener("click", (e) => { tipFunc(e) });
document.querySelector("#tip25").addEventListener("click", (e) => { tipFunc(e) });
document.querySelector("#tip50").addEventListener("click", (e) => { tipFunc(e) });
document.querySelector("#total-persons-field").addEventListener("change", (e) => { getPersons(e) });
document.querySelector("#reset-btn").addEventListener("click", reset);


function tipFunc(e) {
    tip = e.target.value;
    console.log("tip", tip);
    if (billAmount != undefined && tip != undefined && persons != undefined) {
        bill = (parseInt(billAmount) * (parseInt(tip) / 100)) / persons;
        document.getElementById("total-tip-field").value = bill;
        document.getElementById("total-amount-field").value = parseInt(billAmount) + bill;
    }
}

function getBill(e) {
    billAmount = e.target.value;
    console.log(billAmount);
    if (billAmount != undefined && tip != undefined && persons != undefined) {
        bill = (parseInt(billAmount) * (parseInt(tip) / 100)) / persons;
        document.getElementById("total-tip-field").value = bill;
        document.getElementById("total-amount-field").value = parseInt(billAmount) + bill;
    }
}

function getPersons(e) {
    persons = e.target.value;
    console.log(persons);
    if (billAmount != undefined && tip != undefined && persons != undefined) {
        bill = (parseInt(billAmount) * (parseInt(tip) / 100)) / persons;
        document.getElementById("total-tip-field").value = bill;
        document.getElementById("total-amount-field").value = parseInt(billAmount) + bill;
    }
}

function reset() {
    document.getElementById("bill-amount-field").value = "";
    document.getElementById("total-persons-field").value = "";
    document.getElementById("total-tip-field").value = "";
    document.getElementById("total-amount-field").value = "";
}
