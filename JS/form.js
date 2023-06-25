let form = document.getElementById("form"),
nameInput = document.getElementById("name"),
emailInput = document.getElementById("email"),
passwordInput = document.getElementById("password"),

eye_container = document.querySelector("[class='eye_container']");
eye_container.addEventListener("click",function(){
    this.parentElement.classList.toggle("hidePassword");

    if(this.parentElement.classList.contains("hidePassword")){
        passwordInput.type = "text"
    }else{
        passwordInput.type = "password"
    }
})


let emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let passwordExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
let nameExpression = /^[A-Za-z][A-Za-z0-9_\s]{7,29}$/;

let isNameValid= false,isEmailValid = false,isPasswordValid = false;

function seterror(id,text) {
    let input = document.getElementById(id);
    if(id == "password"){
        input.parentElement.nextSibling.textContent = text;
    }else{
        input.nextElementSibling.textContent = text;
    }
}
nameInput.addEventListener("blur",(e) => {
    let Namevalue = e.target.value;
    if(nameExpression.test(Namevalue)){
        nameInput.classList.add("valid")
        nameInput.classList.remove("invalid")
        seterror(e.target.id,``)
        isNameValid = true
    }else{
     nameInput.classList.add("invalid")  ;
     nameInput.classList.remove("valid")  ;
     seterror(e.target.id,`The ${e.target.id} should contain at least one upper case charachter and it should me minimum 8 charachters`) 
     isNameValid = false;
    }
})
emailInput.addEventListener("blur",(e) => {
    let email = e.target.value;
    if(emailExpression.test(email)){
        emailInput.classList.add("valid")
        emailInput.classList.remove("invalid")
        seterror(e.target.id,``)
        isNameValid = true
    }else{
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        seterror(e.target.id,`The ${e.target.id} you entered is not valid`) 
        isEmailValid = false;
    }
})
passwordInput.addEventListener("blur",(e) => {
    let password = e.target.value;
    if(passwordExpression.test(password)){
        passwordInput.classList.add("valid")
        passwordInput.classList.remove("invalid")
        seterror(e.target.id,``)
        isPasswordValid = true
    }else{
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        seterror(e.target.id,`The ${e.target.id} should contain uppercase,lowercase letters and symbols and should not contain space`) 
    isPasswordValid = false;
    }
})


let successPopup = document.getElementById("successModal");
let errorPopup = document.getElementById("errorModal");
let inputs = [nameInput,emailInput,passwordInput]
form.addEventListener("submit",(e) => {
    e.preventDefault()
        if(isNameValid && isNameValid && isPasswordValid){
            successPopup.showModal();
            setTimeout(() => {
                location.href = "./index.html"
            }, 2000);
            inputs.forEach(input => input.className = "")
        }else{
            errorPopup.showModal()
        }
        nameInput.value = "";
        emailInput.value = ""
        passwordInput.value = "";
        document.body.style.pointerEvents = "none";
});

successPopup.addEventListener("close", () => {
    document.body.style.pointerEvents = "auto";
  });
  errorPopup.addEventListener("close", () => {
    document.body.style.pointerEvents = "auto";
  });