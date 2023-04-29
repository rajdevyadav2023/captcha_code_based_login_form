// Selecting all required element from DOM
const useridField = document.getElementById("user-id");
const passwordField = document.getElementById("password");
const captchaScreen = document.getElementById("c-screen");
const captchaField = document.getElementById("c-input");
const loginBtn = document.getElementById("log-in");
// Raw Materials for Captcha Code are a-z, 0-9 and A-Z
let rawMaterials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m','n','o','p','q','r','s','t','u','v','w', 'x','y', 'z', '0','1','2','3','4','5','6','7','8','9','A', 'B', 'C', 'D', 'E', 'F','G', 'H','I','J','K','L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

// console.log(rawMaterials);

// Captcha Code Generator Function
const codeGenerator = ()=>{
    const c1 = Math.floor(Math.random() * 62);
    const c2 = Math.floor(Math.random() * 62);
    const c3 = Math.floor(Math.random() * 62);
    const c4 = Math.floor(Math.random() * 62);
    const c5 = Math.floor(Math.random() * 62);
    
    const captcha = rawMaterials[c1]+rawMaterials[c2]+rawMaterials[c3]+rawMaterials[c4]+rawMaterials[c5];
    captchaScreen.value = captcha ;
    // console.log(captcha);
    // console.log(typeof captcha)
    
}
loginBtn.addEventListener("click", ()=>{
    if(useridField.value === ''){
        alert("Please, Enter Your User ID !")
    } else if(passwordField.value === ''){
        alert("Please, Enter Your Password !")
    }else if(captchaScreen.value !== captchaField.value){
        alert("Captcha Doesn't Match!")
    } else{
        alert("Congratulation! Logged In Successfully !")
        useridField.value = '';
        passwordField.value = '';
        captchaField.value = '';
    }

    codeGenerator();
})
codeGenerator();



