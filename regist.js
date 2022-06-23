const EmailInput=document.querySelector("#email");
const EmailMsg=document.querySelector("#email-msg");
const FirstnameInput=document.querySelector("#firstname");
const FirstnameMsg=document.querySelector("#firstname-msg");
const LastnameInput=document.querySelector("#lastname");
const LastnameMsg=document.querySelector("#lastname-msg");
const DateInput=document.querySelector("#date");
const DateMsg=document.querySelector("#date-msg");
const PasswordInput=document.querySelector("#password");
const PasswordMsg=document.querySelector("#password-msg");
const RepasswordInput=document.querySelector("#re-password");
const RepasswordMsg=document.querySelector("#re-password-msg");
const Button=document.querySelector("#btn");
const form = document.querySelector("form")

const content=document.querySelector(".modal-body")
const modal = document.querySelector(".modal")

let emailBoolean = false;
let passwordBoolean = false;
let repasswordBoolean = false;
let dateBoolean = false;
let FirstnameBoolean = false;
let LastnameBoolean = false;

EmailInput.addEventListener("keyup", ()=>{handleEmail(EmailInput,EmailMsg)})
PasswordInput.addEventListener("keyup", ()=>{handlePassword(PasswordInput,PasswordMsg)})
FirstnameInput.addEventListener("keyup", ()=>{handleFirstName(FirstnameInput,FirstnameMsg)})
LastnameInput.addEventListener("keyup", ()=>{handleLastName(LastnameInput,LastnameMsg)})
RepasswordInput.addEventListener("keyup", ()=>{handleRepassword(RepasswordInput,RepasswordMsg)})
DateInput.addEventListener("keyup", ()=>{handleDate(DateInput,DateMsg)})
Button.addEventListener("click", (e)=>{handleLogin(e)})


handleEmail = (Input,Msg) =>{

    Input.classList.remove("is-valid","is-invalid")
    Msg.classList.remove("valid-feedback","invalid-feedback")

    regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailBooleanBoolean = false;

    if(Input.value==""){
        Msg.innerHTML="Empty field"
    }
    else if(!regex.test(Input.value)){
        Msg.innerHTML="Inappropriate format"
    }
    else{
        Msg.innerHTML="Correct"
        emailBoolean = true;
    }

    if(!emailBoolean){
        Input.classList.add("is-invalid")
        Msg.classList.add("invalid-feedback")
    }else{
        Input.classList.add("is-valid")
        Msg.classList.add("valid-feedback")
    }
}

handleFirstName = (Input,Msg) =>{

    Input.classList.remove("is-valid","is-invalid")
    Msg.classList.remove("valid-feedback","invalid-feedback")


    regex=/^[A-Za-z]+$/;
    FirstnameBoolean = false;

    if(Input.value==""){
        Msg.innerHTML="Empty field"
    }
    else if(!regex.test(Input.value)){
        Msg.innerHTML="Inappropriate format"
    }
    else{
        Msg.innerHTML="Correct"
        FirstnameBoolean = true;
    }

    if(!FirstnameBoolean){
        Input.classList.add("is-invalid")
        Msg.classList.add("invalid-feedback")
    }else{
        Input.classList.add("is-valid")
        Msg.classList.add("valid-feedback")
    }
}

handleLastName = (Input,Msg) =>{

    Input.classList.remove("is-valid","is-invalid")
    Msg.classList.remove("valid-feedback","invalid-feedback")


    regex=/^[A-Za-z]+$/;
    LastnameBoolean = false;

    if(Input.value==""){
        Msg.innerHTML="Empty field"
    }
    else if(!regex.test(Input.value)){
        Msg.innerHTML="Inappropriate format"
    }
    else{
        Msg.innerHTML="Correct"
        LastnameBoolean = true;
    }

    if(!LastnameBoolean){
        Input.classList.add("is-invalid")
        Msg.classList.add("invalid-feedback")
    }else{
        Input.classList.add("is-valid")
        Msg.classList.add("valid-feedback")
    }
}

handlePassword = (Input,Msg) =>{

    Input.classList.remove("is-valid","is-invalid")
    Msg.classList.remove("valid-feedback","invalid-feedback")


    regex=/[a-zA-Z0-9]+@#&/;
    regexLowerLetter=/[a-z]/g;
    regexUpperLetter=/[A-Z]/g;
    regexNumLetter=/[0-9]/g;

    passwordBoolean = false;

    handleRepassword(RepasswordInput,RepasswordMsg)
    if(Input.value==""){
        Msg.innerHTML="Empty field"
    }
    else if(Input.value.length<9){
        Msg.innerHTML="Password too short"
    }
    else if(regex.test(Input)){
        Msg.innerHTML="Inappropriate format"
    }
    else if(!regexLowerLetter.test(Input.value)){
        Msg.innerHTML="At least one lower case character"
    }
    else if(!regexUpperLetter.test(Input.value)){
        Msg.innerHTML="At least one uppercase character"
    }
    else if(!regexNumLetter.test(Input.value)){
        Msg.innerHTML="At least one number character"
    }
    else{
        Msg.innerHTML="Correct"
        passwordBoolean = true;
    }

    if(!passwordBoolean){
        Input.classList.add("is-invalid")
        Msg.classList.add("invalid-feedback")
    }else{
        Input.classList.add("is-valid")
        Msg.classList.add("valid-feedback")
    }
}

handleRepassword = (Input,Msg) =>{

    Input.classList.remove("is-valid","is-invalid")
    Msg.classList.remove("valid-feedback","invalid-feedback")

    regex=/[a-zA-Z0-9]+@#&$/;
    repasswordBoolean = false;

    if(Input.value==""){
        Msg.innerHTML="Empty field"
    }
    else if(Input.value != PasswordInput.value){
        Msg.innerHTML="Passwords do not match"
    }
    else{
        Msg.innerHTML="Correct"
        repasswordBoolean = true;
    }

    if(!repasswordBoolean){
        Input.classList.add("is-invalid")
        Msg.classList.add("invalid-feedback")
    }else{
        Input.classList.add("is-valid")
        Msg.classList.add("valid-feedback")
    }
}

handleDate= (Input,Msg) =>{

    Input.classList.remove("is-valid","is-invalid")
    Msg.classList.remove("valid-feedback","invalid-feedback")

    dateBoolean = false;
    if(Input.value==""){
        Msg.innerHTML="Inappropriate format <br>or date does not exist"
    }else{
        dateBoolean = true;
        Msg.innerHTML="Correct"
    }

    if(!dateBoolean){
        Input.classList.add("is-invalid")
        Msg.classList.add("invalid-feedback")
    }else{
        Input.classList.add("is-valid")
        Msg.classList.add("valid-feedback")
    }
}

handleLogin = (e) =>{
    e.preventDefault();
    handleEmail(EmailInput,EmailMsg)
    handlePassword(PasswordInput,PasswordMsg)
    handleFirstName(FirstnameInput,FirstnameMsg)
    handleLastName(LastnameInput,LastnameMsg)
    handleRepassword(RepasswordInput,RepasswordMsg)
    handleDate(DateInput,DateMsg)
    if(emailBoolean && passwordBoolean && dateBoolean && repasswordBoolean && FirstnameBoolean && LastnameBoolean){
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "regist.php", true);
        xhr.onload = ()=>{
          if(xhr.readyState === XMLHttpRequest.DONE){
              if(xhr.status === 200){
                  let data = xhr.response;
                  if(data === "success"){
                    dialogMessage("successful registration")
                  }else{
                    dialogMessage(data)
                  }
              }
          }
        }
        let formData = new FormData(form);
        xhr.send(formData);

    }
}

dialogMessage = (text) =>{
    content.innerHTML=text
    $(".modal").modal('show');  
}
