const login_box = document.querySelector('.login-box');
const reg_box = document.querySelector('.reg-box');
const link_reg = document.querySelector('#link_reg');
const link_login = document.querySelector('#link_login');

link_reg.addEventListener('click', function () {
    login_box.style.display = 'none';
    reg_box.style.display = 'block';
})
link_login.addEventListener('click', function () {
    login_box.style.display = 'block';
    reg_box.style.display = 'none';
})