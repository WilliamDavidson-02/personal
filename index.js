const profileBtn = document.querySelector(".profileImg");
const box = document.querySelectorAll(".navli");
const html = document.querySelector(".html");
const js = document.querySelector(".js");
const css = document.querySelector(".css");

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

js.addEventListener("click", () => {
    js.classList.toggle("expandjs");
    css.classList.toggle("servop");
    html.classList.toggle("servop");
})

html.addEventListener("click", ()=>{
    html.classList.toggle("expandhtml");
    css.classList.toggle("servop");
    js.classList.toggle("servop");
})

css.addEventListener("click", ()=>{
    css.classList.toggle("expandhtml");
    html.classList.toggle("servop");
    js.classList.toggle("servop");
})