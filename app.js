// Overlay to darken non focus background when a modal is displayed
const overlay = document.querySelector(".overlay");

// Temporary data for basic updating of numbers in prototype
localStorage.setItem('totalMoney', '81914');
localStorage.setItem('totalBackers', '5007');
localStorage.setItem('daysLeft', '56');

localStorage.setItem('bambooLeft', '101');
localStorage.setItem('blackLeft', '62');

// Set this localstorage data in the DOM
let lsTotalMoney = parseInt(localStorage.getItem('totalMoney'));
let lsTotalBackers = parseInt(localStorage.getItem('totalBackers'));
let lsBambooLeft = parseInt(localStorage.getItem('bambooLeft'));
let lsBlackLeft = parseInt(localStorage.getItem('blackLeft'));


const totalRecieved = document.querySelector(".total-recieved");
totalRecieved.innerHTML = '$' + lsTotalMoney.toLocaleString();
const backersRecieved = document.querySelector(".backers-recieved");
backersRecieved.innerHTML = '$' + lsTotalBackers.toLocaleString();

const bambooLeft = document.querySelectorAll(".bamboo-n");
const blackLeft = document.querySelectorAll(".black-n");
bambooLeft.forEach(num=> {
    num.innerHTML = lsBambooLeft.toLocaleString();
});
blackLeft.forEach(num => {
    num.innerHTML = lsBlackLeft.toLocaleString();
});

// Hamburger mobile menu Appear on click
const hamburgerMenu = document.querySelector(".hamburger");
const navDropdown = document.querySelector(".nav__dropdown");


hamburgerMenu.addEventListener("click", () => {
    if(hamburgerMenu.classList.contains("hamburger-active")) {
        hamburgerMenu.classList.remove("hamburger-active");
        navDropdown.style.display = "none";
        overlay.style.display = "none";
    } else {
        hamburgerMenu.classList.add("hamburger-active");
        navDropdown.style.display = "block";
        overlay.style.display = "block";     
    }
});

// Change "Bookmark" button highlighting once clicked
const bookmarkButton = document.querySelector(".product__cta-bookmark");

bookmarkButton.addEventListener("click", () => {
    if(bookmarkButton.classList.contains("product__cta-bookmark-active")){
        bookmarkButton.classList.add("product__cta-bookmark");
        bookmarkButton.classList.remove("product__cta-bookmark-active");
    } else {
        bookmarkButton.classList.add("product__cta-bookmark-active");
        bookmarkButton.classList.remove("product__cta-bookmark");
    }
});

// Make the "Back this project" modal show on click of "Back this project" button
const backProductModal = document.querySelector(".back__modal");
const backProductButton = document.querySelector(".product__cta-back");

backProductButton.addEventListener("click", () => {
    backProductModal.style.display = "block";
    overlay.style.display = "block";
    hamburgerMenu.style.pointerEvents = "none";
});

// Close "Back this project" modal
const closeBackProductModal = document.querySelector(".back__modal-close");
closeBackProductModal.addEventListener("click", () => {
    backProductModal.style.display = "none";
    overlay.style.display = "none";
    hamburgerMenu.style.pointerEvents = "auto";
});

// "Back this project" options select 
const radioButtons = document.querySelectorAll(".back__modal-radio");
const radioButtonSelected = `<span class="back__modal-radio-selected"></span>`;
radioButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if(button.children.length === 0) {
            button.innerHTML = radioButtonSelected;
            e.path[2].style.boxShadow = "0 0 5px #42b1aa";
            e.path[2].style.border = "0.1rem solid #42b1aa";
            e.path[2].lastElementChild.style.display = "flex";
        } else {
            button.innerHTML = '';
            e.path[3].style.boxShadow = "1px 1px 1px rgb(231, 231, 231)";
            e.path[3].style.border = "1px solid rgb(231, 231, 231)";
            e.path[3].lastElementChild.style.display = "none";
        }
    })
});

// Submit pledge and update local storage values
const main = document.querySelector("main");
const submitPledge = document.querySelectorAll(".back__modal-enterpledge-btn");
let newDiv = document.createElement('div');
newDiv.classList.add('back__modal-submited');
newDiv.innerHTML = `
        <img class="back__modal-submitted__img" src="./images/icon-check.svg" alt="Success">
        <h4 class="back__modal-submitted__title">Thanks for your support!</h4>
        <p class="back__modal-submitted__main">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
        <button class="back__modal-submitted__btn">Got it!</button>`
        



submitPledge.forEach(button => {
    button.addEventListener("click", (e) => {
        const inputPledge = e.path[1].children[1];
        console.log(inputPledge.value);
        if(inputPledge.value) {
            main.appendChild(newDiv);
            const thanksModal = document.querySelector(".back__modal-submited");
            thanksModal.style.display = "flex";
            overlay.style.zIndex = "11";
            overlay.style.display = "block";

            // "Got it!" button to close modal after pledge submition
        
            const gotItBtn = document.querySelector(".back__modal-submitted__btn");
            gotItBtn.addEventListener("click", () => {
                overlay.style.zIndex = "10";
                overlay.style.display = "none";
                thanksModal.style.display = "none";
            })
        }
    }) 
})












