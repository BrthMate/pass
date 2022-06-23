const EmailInput=document.querySelector("#email");
const EmailMsg=document.querySelector("#email-msg");
const PasswordInput=document.querySelector("#password");
const PasswordMsg=document.querySelector("#password-msg");
const Button=document.querySelector("#btn");
const form = document.querySelector("form");

const content=document.querySelector(".modal-body")
const modal = document.querySelector(".modal")

let emailBoolean = false;
let passwordBoolean = false;

EmailInput.addEventListener("keyup", ()=>{handleEmail(EmailInput,EmailMsg)})
PasswordInput.addEventListener("keyup", ()=>{handlePassword(PasswordInput,PasswordMsg)})
Button.addEventListener("click", (e)=>{handleLogin(e)})


handleEmail = (Input,Msg) =>{

    Input.classList.remove("is-valid","is-invalid")
    Msg.classList.remove("valid-feedback","invalid-feedback")

    regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailBoolean = false;

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

handlePassword = (Input,Msg) =>{

    Input.classList.remove("is-valid","is-invalid")
    Msg.classList.remove("valid-feedback","invalid-feedback")

    regex=/[a-zA-Z0-9]+@#&/;
    passwordBoolean = false;

    if(PasswordInput.value==""){
        PasswordMsg.innerHTML="Empty field"
    }
    else if(PasswordInput.value.length<9){
        PasswordMsg.innerHTML="Password too short"
    }
    else{
        PasswordMsg.innerHTML="Correct"
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

handleLogin = (e) =>{
    e.preventDefault();
    handleEmail(EmailInput,EmailMsg)
    handlePassword(PasswordInput,PasswordMsg)
    if(emailBoolean && passwordBoolean){
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "login.php", true);
        xhr.onload = ()=>{
          if(xhr.readyState === XMLHttpRequest.DONE){
              if(xhr.status === 200){
                  let data = xhr.response;
                  if(data === "success"){
                    dialogMessage("successful Login")
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

