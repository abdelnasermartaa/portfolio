const pass_filed = document.querySelector('.pass-key');
const showBtn = document.querySelector('.show');
showBtn.addEventListener('click' , function(){
    if(pass_filed.type === "password"){
        pass_filed.type ="text";
        showBtn.textContent = " إخفاء كلمة المرور";
        showBtn.style.color = "#3498db";
}else{
    pass_filed.type = "password";
    showBtn.textContent = "اظهار كلمة المرور";
    showBtn.style.color = "#222";
}
});