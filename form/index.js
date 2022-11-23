let sign = document.querySelector('#sign_in');
let signUp = document.querySelector('#sign_up');

    sign.onclick = function() {
        if(!sign.classList.contains('active')) {
            sign.classList.add('active');
            signUp.classList.remove('active');

        } else if(sign.classList.contains('active')){
            sign.classList.remove('active');
            signUp.classList.add('active');
        }
    }
    signUp.onclick = function() {
        if(!signUp.classList.contains('active')) {
            signUp.classList.add('active');
            sign.classList.remove('active');

        } else if(signUp.classList.contains('active')){
            sign.classList.add('active');
            signUp.classList.remove('active');
        }
    }

    
function block(){
    let btn = document.querySelector('#btn');
    btn.disabled = true;
    
}
block();
document.addEventListener( 'keyup', event => {
    if( event.code === 'Enter' ) checkBtn();
  });

function checkBtn() {
    console.log('check');
    let user = document.querySelector('#username').value;
    let pass = document.querySelector('#password').value;
    if(user.length > 0 && pass.length > 0) {
        btn.disabled = false;
    }
}
let check = document.querySelector('#check__label');
check.addEventListener('mouseover', (event) => {
    checkBtn();
})
btn.addEventListener('mouseover', (event) => {
    checkBtn();
})
    
btn.onclick = function(){
    let userData = document.querySelector('#username').value;
    let passData = document.querySelector('#password').value;
    const data = {
        "login": userData,
        "password" : passData
    }
    console.log(data);
}
document.querySelector('#fp').onclick = ()=>{
    alert('I\'m so sorry, stupid Bitch, gerrara here!!!');
}






