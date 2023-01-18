const bill = document.getElementById('bill')
const chosenTip = document.querySelectorAll('.select-tip')
const customTip = document.querySelector('.custom')
const people = document.getElementById('people')
const tipForPerson = document.querySelector('.tip-for-person')
const tipForAll = document.querySelector('.tip-for-all')
const calculate = document.querySelector('.btn')
const error = document.querySelector('.error')

bill.value = "";
people.value = "1";
tipForPerson.innerHTML = "$" + (0.0).toFixed(2)
tipForAll.innerHTML = "$" + (0.0).toFixed(2)

let billValue;
let peopleValue = 1;
let chosenTipValue;
let customValue;

bill.addEventListener('input', billFun)
people.addEventListener('input', peopleFun)
chosenTip.forEach(function(val){
    val.addEventListener('click', handleClick)
})
customTip.addEventListener("input", customInputFun)


function billFun(){
    billValue = parseFloat(bill.value);
    // calculateTip()
}

function peopleFun() {
    peopleValue = parseFloat(Math.trunc(people.value))
    // calculateTip()
}


function customInputFun() {
    chosenTipValue = parseFloat(customTip.value / 100);
    chosenTip.forEach(function(val){
        val.classList.remove('active-tip')

    });

    // calculateTip();

}
function handleClick(event) {
    
    chosenTip.forEach(function(val){
        val.classList.remove('active-tip')
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add('active-tip')
            chosenTipValue = parseFloat(val.innerHTML)/100
            customTip.value = "";
            customTip.placeholder = "custom";
        }
    })
    // calculateTip()
}
function calculateTip() {
    if(peopleValue >= 1){
        let tipAmount = (billValue * chosenTipValue) / peopleValue;
        let total = (billValue + tipAmount) / peopleValue;

        tipForPerson.innerHTML = "$" + tipAmount.toFixed(2)
        tipForAll.innerHTML = "$" + total.toFixed(2)   
    }
    if (peopleValue<1){
        error.style.display = "block"
        people.style.border = "1px solid red"
    }  else {
        error.style.display = "none"
        people.style.border = "none"
    }


    
}
calculate.addEventListener('click', calculateTip)
