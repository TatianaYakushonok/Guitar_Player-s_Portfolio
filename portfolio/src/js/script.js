window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.humburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('humburger__active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('humburger__active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})

const time = 2000;
const step = 1;

let e = document.querySelectorAll('.out');

function outNum () {

    for(let i = 0; i < e.length; i++) {

        let n = 0;
        let num = Number(e[i].innerHTML);

        let t = Math.round(time / (num/step));
        let interval = setInterval(() => {
            n = n + step;
            if (n == num) {
                clearInterval(interval);
            }
            e[i].innerHTML = n;
        }, t);
    }
 
};

outNum();