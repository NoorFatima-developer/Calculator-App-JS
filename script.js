let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let buttonsArray = Array.from(buttons);
let string = "";

buttonsArray.forEach(function (btn) {
  console.log(btn); //return variable
  btn.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.innerHTML);
    string = event.target.innerHTML;
    display.value = string;
  });
});

console.log(buttons); //return NodeList
console.log(buttonsArray); //return Array

// ForEach alag alag krta hai jesy yahan mery ps nodelist thi emeny osko array m kea Array.from sy or ab m osko variable m store krna chahti o
// ta k m ossy use krsko..and hmny forEach loop sy onko alag alag krlea hai..
// and hmri array ab variable m convert hochuki hai...
