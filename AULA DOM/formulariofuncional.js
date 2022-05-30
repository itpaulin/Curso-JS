const nameInput = document.querySelector ("#name");
const emailInput = document.querySelector ("#email");
const submitButton = document.querySelector ("#submit-button");
const errorMessage = document.querySelector (".msg");
const items = document.querySelector ('.items')
submitButton.addEventListener("click",(e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue == '' || emailValue == ''){
        errorMessage.textContent = "Please fill out the filds!";
        errorMessage.classList = 'error'; //Puxou da classe .error no CSS
        
        setTimeout(() => {
            errorMessage.textContent = "";
            errorMessage.classList = "";
        }, 3000);
        return;
    }

    const li = document.createElement ("li");
    li.classList = "Item";
    li.innerHTML = `Name: ${nameValue} <br />Email: ${emailValue}`;

    items.appendChild(li); // AFILIA a li nova dentro da ul items

    nameInput.value = "";
    emailInput.value = ""; 
})