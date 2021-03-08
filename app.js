// Overlay to darken non focus background when a modal is displayed
const overlay = document.querySelector(".overlay");

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
});

// Close "Back this project" modal
const closeBackProductModal = document.querySelector(".back__modal-close");
closeBackProductModal.addEventListener("click", () => {
    backProductModal.style.display = "none";
    overlay.style.display = "none";   
})






