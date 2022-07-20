const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('planet-img');
const textToChange = document.getElementById('text-to-change');
const labels = document.querySelectorAll('label');
const options = document.querySelectorAll('option');
const button = document.querySelector('.form-submit-button');
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector(".nav-menu-wrapper");

menuButton.addEventListener('click', () => {
    if (navMenu.classList[0] == 'nav-menu-wrapper-activ') {
        navMenu.classList = 'nav-menu-wrapper';
    }else{
        navMenu.classList = 'nav-menu-wrapper-activ';
    }
}) 

selectEl.addEventListener('change', function() {

    switch(true) {
        case this.value === 'mercury' : registrationImage.src = "./assets/pictures/Planet.svg";
        break;
        case this.value === 'uranus' : registrationImage.src = "./assets/pictures/Uran.svg";
        break;
        case this.value === 'venus' : registrationImage.src = "./assets/pictures/VeneraPic.png";
        break;
        case this.value === 'mars' : registrationImage.src = "./assets/pictures/Mars.png";
        break;
        case this.value === 'neptune' : registrationImage.src = "./assets/pictures/Neptune.png";
        break;
        case this.value === 'earth' : registrationImage.src = "./assets/pictures/Earth.png";
        break;
        default: break; 
    }

})

button.addEventListener('click', function() {
    console.log(this.className);
    this.classList.toggle('form-submit-button');
})
