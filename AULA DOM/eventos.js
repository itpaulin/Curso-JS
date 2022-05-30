const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const body = document.querySelector ("body");
const allItems = document.querySelectorAll(".item");


submitButton.addEventListener("click", function (e) {
    e.preventDefault();

const nameValue = nameInput.value;
const emailValue = emailInput.value;

if(nameValue == "" || emailValue == ""){
    return alert("PUT SOMETHING");
}

  myForm.style.background = "pink";
  submitButton.style.background = "blue";
  const firstItem = allItems[0];
  firstItem.innerHTML = nameValue;
  const secondItem = allItems[1];
  secondItem.innerHTML = emailValue;
  body.style.background = "green";


});





allItems[2].remove();






// nameInput.addEventListener("change", function (e) {
//     console.log("after that, changed to this", e.target.value);
// })


























submitButton.style.color = "red";
submitButton.style.background = "pink"
