const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    // ensure the clicked element has an id (e.g., 'grey', 'red', etc.)
    if (e.target && e.target.id) {
      body.style.backgroundColor = e.target.id;
    }
  });
});
