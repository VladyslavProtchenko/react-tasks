let sign = document.querySelector('#sign_in');
let signUp = document.querySelector('#sign_up');
let user = document.querySelector('#username').value;
let pass = document.querySelector('#password').value;

    sign.onclick = function() {
        if(!sign.classList.contains('active')) {
            sign.classList.add('active');
            signUp.classList.remove('active');

        } else if(sign.classList.contains('active')){
            sign.classList.remove('active');
            signUp.classList.add('active');
        }
        document.querySelector('#label_pass').classList.remove('hide');
        document.querySelector('#password').classList.remove('hide');
        document.querySelector('#save').classList.remove('hide');
        document.querySelector('#fp').classList.remove('hide');
    }
    signUp.onclick = function() {
        if(!signUp.classList.contains('active')) {
            signUp.classList.add('active');
            sign.classList.remove('active');

        } else if(signUp.classList.contains('active')){
            sign.classList.add('active');
            signUp.classList.remove('active');
        }

        document.querySelector('#label_pass').classList.add('hide');
        document.querySelector('#password').classList.add('hide');
        document.querySelector('#save').classList.add('hide');
        document.querySelector('#fp').classList.add('hide');
        document.querySelector('#btn').innerHTML ="Sing up";
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

    
btn.onclick = function(){
    let userData = document.querySelector('#username').value;
    let passData = document.querySelector('#password').value;
    const data = {
        "login": userData,
        "password" : passData
    }
    console.log(data);
    document.querySelector('#username').value = '';
    document.querySelector('#password').value = '';
}
document.querySelector('#fp').onclick = ()=>{
    alert('I\'m so sorry, stupid Bitch, gerrara here!!!');
}

document.querySelector('#username').onclick = function(){
    document.querySelector('#label_name').classList.add('active');
    document.querySelector('#username').classList.add('input_active')
}
document.querySelector('#password').onclick = function(){
    document.querySelector('#password').classList.add('input_active');
    document.querySelector('#label_pass').classList.add('active');

}











