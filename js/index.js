// Your code goes here
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('mouseover', aquaChange)
});

navLinks.forEach((link) => {
    link.addEventListener('mouseleave', (event) => {
        event.preventDefault();
        event.target.style.color = 'black';
    });
});

navLinks.forEach((link) => {
    link.addEventListener('focus', (event) => {
        event.preventDefault();
        event.target.style.border = '5px solid aquamarine';
    });
});

navLinks.forEach((link) => {
    link.addEventListener('blur', (event) => {
        event.preventDefault();
        event.target.style.border = '';         
    });
});

function aquaChange(event) {
    event.preventDefault();
    event.target.style.color = 'aquamarine';
};

let busImg = document.querySelector('.intro img');

busImg.addEventListener('wheel', (event) => {
    event.preventDefault();
    event.target.style.border = '10px solid aquamarine';
});

busImg.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.style.border = '2px solid red';
})

let entireBody = document.querySelector('body');

let allImg = document.querySelectorAll('body img');

let bottomImage = document.querySelector('.content-destination img');

allImg.forEach((image) => {
    image.addEventListener('drag', (event) => {
        event.preventDefault();
        entireBody.style.opacity = '0.5';
    });
});

allImg.forEach((image) => {
    image.addEventListener('dragend', (event) => {
        event.preventDefault();
        entireBody.style.opacity = '1';
    });
});

allImg.forEach((image) => {
    image.addEventListener('dblclick', (event) => {
        event.target.style.padding = '50px';
    });
});

bottomImage.addEventListener('click', (event) => {
    event.preventDefault();
    event.target.style.border = '3px solid aquamarine';
});

entireBody.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    event.target.style.display = 'none';
});
