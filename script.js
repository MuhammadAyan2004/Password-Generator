const passwordBox = document.getElementById("password");
const genBtn = document.querySelector("button");
const copy = document.querySelector(".input i");

const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()~{}<>?[]";
const allChar = upperCase + lowerCase + number + symbol ;

function createPassword () {
    let password = "";
    while(lenght > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
};

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
};

genBtn.addEventListener("click",createPassword);
copy.addEventListener("click",copyPassword);