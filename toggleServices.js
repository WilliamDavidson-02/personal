const html = document.querySelector(".html");
const js = document.querySelector(".js");
const css = document.querySelector(".css");
const mainContainer = document.querySelectorAll(".servbox");

html.addEventListener("click", () => {
    html.classList.toggle("expandhtml");
    if (css.classList.contains("expandcss")) {
        css.classList.toggle("expandcss")
    }
    if (js.classList.contains("expandjs")) {
        js.classList.toggle("expandjs")
    }
})

js.addEventListener("click", () => {
    js.classList.toggle("expandjs");
    if (css.classList.contains("expandcss")) {
        css.classList.toggle("expandcss")
    }
    if (html.classList.contains("expandhtml")) {
        html.classList.toggle("expandhtml")
    }
})

css.addEventListener("click", () => {
    css.classList.toggle("expandcss");
    if (html.classList.contains("expandhtml")) {
        html.classList.toggle("expandhtml")
    }
    if (js.classList.contains("expandjs")) {
        js.classList.toggle("expandjs")
    }
})