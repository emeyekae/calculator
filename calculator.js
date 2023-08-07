window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      getCurrentUIValues();

      
      update();
    });
  }
});

function getCurrentUIValues() {

  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment

function setupIntialValues() {
const values  = { amount: 30000, years: 5, rate: 7.0 };
const formAmount = document.getElementById("loan-amount");
formAmount.value = values.amount;
const formYears = document.getElementById("loan-years");
formYears.value = values.years;
const formRate = document.getElementById("loan-rate");
formRate.value = values.rate.toFixed(2);
update();
}


// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //corrected failed test case
  //should handle 0 term years and 
  //should not process negative "-" term years
  if (values.years <= 0){
    return("The value for term in years must be > 0")
  }
  const n = (values.years * 12);
  // corrected after failing test case 
  //should return a result with 2 decimal places
  if (values.rate !== 0){
  const i = (values.rate/100/12);
  return(((values.amount * i) /( 1 - (Math.pow((1+i), -n)))).toFixed(2));
  }else{
  return(values.amount/n);
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const formMonthlyPayment = document.querySelector("#monthly-payment")
  //corrected failed test case
  //should handle 0 term years and 
  //should not process negative "-" term years
  if (monthly !== "The value for term in years must be > 0"){ 
  formMonthlyPayment.innerText = '$'+monthly;
  }else{
    formMonthlyPayment.innerText = monthly;
  }
}
