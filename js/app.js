const header = document.querySelector(".header");

function updateHeader() {
    if (!header) return;

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateHeader);
updateHeader();

console.log("YEIN★SO Maison loaded");