console.log("From Js");
let string = "";
const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".display");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerText === "AC") {
        console.log("AC");
        string = "";
        screen.value = string;
      } else if (e.target.innerText === "DE") {
        // 1 element remove
        string = string.slice(0, -1);
        screen.value = string;
      } else if (e.target.innerText === "=") {
        screen.value = eval(string);
      } else {
        string += e.target.innerText;
        screen.value = string;
      }
    } catch (err) {
      screen.value = "Error";
    }
  });
});
