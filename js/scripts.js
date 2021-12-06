// HTML Elements
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let photoBtn = document.querySelectorAll('.photo-btn');
let msgEl = document.querySelector('.msg');

// Message moving
function moving_text() {
  let txt = msgEl.childNodes[0].nodeValue;
  txt = txt.substring(1, txt.length) + txt[0];
  msgEl.textContent = txt;
}

setInterval(moving_text, 120);

// Window Scrolling
window.onscroll = function() {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

// Navigation
menu.addEventListener('click', function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Searching
searchBtn.addEventListener('click', function () {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// FORM login
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

// Photo button
photoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#photo-slider').src = src;
    });
});

