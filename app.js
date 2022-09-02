let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");


radio1.addEventListener('click', () => {
    radio1.style.background = "#000";
    radio1.style.border = "none";

    radio2.style.background = "transparent";
    radio2.style.border = "1px solid #bbb";
});

radio2.addEventListener("click", () => {
    radio2.style.background = "#000";
    radio2.style.border = "none";

    radio1.style.background = "transparent";
    radio1.style.border = "1px solid #bbb";
});