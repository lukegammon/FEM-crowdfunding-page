const hamburgerMenu = document.querySelector(".hamburger");

hamburgerMenu.addEventListener("click", () => {
    if(hamburgerMenu.classList.contains("hamburger-active")) {
        hamburgerMenu.classList.remove("hamburger-active");
    } else {
        hamburgerMenu.classList.add("hamburger-active");
    }
})
