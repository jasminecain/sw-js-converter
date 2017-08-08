var outPut = document.getElementById("outPut");
var enterInput = document.getElementById("enterInput");
var convertBtn = document.getElementById("convert");

//print to output .innerHTML
// enterInput.addEventListener
// document.getElementById
// Assign a function to be executed when the button is clicked
// This function should determine which conversion should
// happen based on which radio button is selected.

// T(°C) = (68°F - 32) × 5/9 = 20 °C
// T(°F) = 20°C × 9/5 + 32 = 68 °F

function convertTemp() {
  var celciusBtn = document.getElementById("celcius");
  var fahrenheitBtn = document.getElementById("fahrenheit");

  if (celciusBtn.checked === true) {
    // console.log('celciusBtn', celciusBtn);
    outPut = Math.round((enterInput.value - 32) * 5 / 9);
    document.getElementById("outPut").innerHTML = outPut;
    tempColor(outPut);
  } else if (fahrenheitBtn.checked === true) {
    // console.log('fahrenheitBtn', fahrenheitBtn);
    outPut = Math.round((enterInput.value * 9 / 5) + 32);
    document.getElementById("outPut").innerHTML = outPut;
    tempColor(outPut);
  }
}

convertBtn.addEventListener("click", function(event) {
  convertTemp();
});

// Get a reference to the button element in the DOM
enterInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    var inputValue = document.getElementById("enterInput").value;
    document.getElementById("outPut").innerHTML = inputValue;
    convertTemp();
    // console.log('outPut', outPut);
    // console.log('Input', enterInput);
  }
});

// if temperature > 90F / 32C convert red
// if temperature < 32F / 0C convert blue
// all other temps green.

function tempColor (outPut) {
  if (outPut < 32) {
    // debugger
  // console.log('outPut value', outPut.value);
    document.getElementById("outPut").style.color = 'blue';
  } else if (outPut > 90) {
    // debugger
    // console.log('outPut value', outPut.value);
    document.getElementById("outPut").style.color = 'red';
  } else {
    // debugger
    document.getElementById("outPut").style.color = 'green';
  }
};

// Clear both fields when clear is pressed
var clearOutput = document.getElementById("clearOutput");

clearOutput.addEventListener("click", function(event) {
  document.getElementById("enterInput").value = '';
  document.getElementById("outPut").innerHTML = '';
  // console.log("working input", enterInput);
  // console.log("working output", outPut);
});
