const hamburgerMenu = document.querySelector(".hamburger");
const navDropdown = document.querySelector(".nav__dropdown");
const overlay = document.querySelector(".overlay");


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



