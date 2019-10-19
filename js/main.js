
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const signUp = document.getElementById('sign-up');
const logIn = document.getElementById('log-in');
const aboutUs = document.getElementById('about-us');
document.getElementById('open-menu').addEventListener('click', function () {
    overlay.classList.add('show-menu');
});
document.getElementById('close-menu-su').addEventListener('click', function () {
    signUp.classList.remove('show-menu');
});
document.getElementById('close-menu-lg').addEventListener('click', function () {
    logIn.classList.remove('show-menu');
});
document.getElementById('close-menu').addEventListener('click', function () {
    overlay.classList.remove('show-menu');
});
document.getElementById('sign-up-btn').addEventListener('click', function () {
    signUp.classList.add('show-menu');
});
document.getElementById('log-in-btn').addEventListener('click', function () {
    logIn.classList.add('show-menu');
});
document.getElementById('open-login').addEventListener('click', function () {
    signUp.classList.remove('show-menu');
    logIn.classList.add('show-menu');
});
document.getElementById('open-signup').addEventListener('click', function () {
    logIn.classList.remove('show-menu');
    signUp.classList.add('show-menu');
});
document.getElementById('about-us-btn').addEventListener('click', function () {
    aboutUs.classList.add('show-menu');
});
document.getElementById('close-menu-au').addEventListener('click', function () {
    aboutUs.classList.remove('show-menu')
});