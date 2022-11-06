const profileBtn = document.querySelector(".profileImg");
const box = document.querySelectorAll(".navli");

profileBtn.addEventListener("click", () => {
    profileBtn.classList.toggle("glowicon");
    box.forEach((e) => {
        e.classList.toggle("navtoggle")
    })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});