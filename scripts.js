/*const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("result").textContent = "No calculation performed";
});*/

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check if both inputs are provided
  if (dividend !== "" && divider !== "") {
    // Perform the division
    const quotient = dividend / divider;

    // Check if the division results in a whole number
    if (Number.isInteger(quotient)) {
      // Display the result without any decimal
      result.innerText = quotient.toFixed(0);
    } else {
      // Display the result with decimal
      result.innerText = quotient.toFixed(0);
    }
  } 

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("result").textContent = "No calculation performed";
});
