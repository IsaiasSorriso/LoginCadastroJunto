const login = document.querySelector('.login');
const linkLogin = document.querySelector('.link-login');
const linkRegister = document.querySelector('.register');
const btnlogin = document.querySelector('.botaoLogin');
const close = document.querySelector('.icon-close');

linkRegister.addEventListener('click', ()=> {
login.classList.add('active');
});

linkLogin.addEventListener('click', ()=> {
login.classList.remove('active');
});

btnlogin.addEventListener('click', ()=> {
login.classList.add('active-popup');
});
close.addEventListener('click', ()=> {
login.classList.remove('active-popup');
});
