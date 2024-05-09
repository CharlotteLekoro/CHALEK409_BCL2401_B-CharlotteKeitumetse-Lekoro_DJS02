

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Perform the division
  const quotient = dividend / divider;

  // Display the result without any decimal
  result.innerText = quotient.toFixed(0);
});


