// Home Button to go homepage
document.getElementById("home").addEventListener("click", function () {
  // window.location.href='index.html';
  window.location.href = "index.html";
});

// input field function
function donateInput(id) {
  const donateValue = parseFloat(document.getElementById(id).value);
  return donateValue;
}

