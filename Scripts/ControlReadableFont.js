const toggle = document.getElementById("font-toggle");

toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("readable-font");
});
