const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
    }
    
window.addEventListener('scroll', scrollHeader);

    const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact - message');

    const sendEmail = (e) => {
        e.preventDefault();

        if (
            contactName.value === '' || 
            contactEmail.value === '' || 
            Message.value === ''
        ) {
            contactMessage.classList.remove('color-light');
            contactMessage.classList.add('color-dark');

            contactMessage.textContent = 'Write all the input Fields';
        }else {
            emailjs.sendForm('service_ffo11el',
            'template_fqjs3w5',
            '#contact-form',
            '3yYow80U5Pb8p2Ocy'
            )
            .then(() => {
                contactMessage.classList.add('color-light');
                contactMessage.textContent = 'Message sent';

                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
            })
        }
    };

    contactForm.addEventListener('submit', sendEmail);

const styleSwictherToggle = document.querySelector('.style__switcher-toggler'),
styleSwitcher = document.querySelector('.style__switcher');

styleSwictherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});

window.addEventListener('scroll', () => {
    if (styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
});

const alternateColor = document.querySelectorAll('.alternate-color');

function setActiveColor(color) {
    alternateColor.forEach((style) => {
        if(color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        }

        else{
            style.setAttribute('disabled', 'true');
        }
    });
}