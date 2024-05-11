

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check if either or both inputs are empty
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  } else if (divider == 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error(new Error('Division by zero'));
  } else {
    // Perform the division
    const quotient = dividend / divider;

    // Display the result without any decimal
    result.innerText = quotient.toFixed(0);
  }

  if (dividend.toLowerCase() === "yolo" && divider === "+++") {
    result.classList.add("critical-error");
    result.innerHTML =
      "Something critical went wrong. Please reload the page";
    console.error("Something critical went wrong. Please reload the page");
    return;
  }
});


