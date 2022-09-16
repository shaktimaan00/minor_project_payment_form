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

let form_container = document.querySelector(".form-container");
let save = document.querySelector(".save");
let payment_container = document.querySelector(".payment-container");
let back = document.querySelector(".back");
let b = document.querySelector(".b");
let c = document.querySelector(".c");

save.addEventListener('click', () =>{
    form_container.classList.add("none");
    payment_container.classList.add("show");
    b.style.background = "transparent";
    b.style.color = "#000";
    c.style.background = "#000"
    c.style.color = "#fff"
});

back.addEventListener('click', () => {
    payment_container.classList.remove("show");
    form_container.classList.remove("none");
    c.style.background = "transparent";
    c.style.color = "#000";
    b.style.background = "#000";
    b.style.color = "#fff";
});

var x = "none";

var cleave = new Cleave(".card-input", {
  creditCard: true,
  onCreditCardTypeChanged: function (type) {
    x = type;
},
});

let remove_show_class = document.querySelector(".icons").children;

let remove_class = () => {
    Array.from(remove_show_class).forEach((e) => {
      e.classList.remove("show");
    });
}

let card_input1 = document.getElementById("card-input1");
card_input1.addEventListener('input', () => {
    let card_name = x;
    let card_name1 = document.getElementById(card_name);
    remove_class();
    card_name1.classList.toggle("show");
    // console.log(card_name);
})

// console.log(x);  

var cleave = new Cleave(".month", {
  date: true,
  datePattern: ["m", "Y"],
});

let p_radio1 = document.querySelector(".pradio1");
let p_radio2 = document.querySelector(".pradio2");
let p_radio3 = document.querySelector(".pradio3");
let card_container = document.querySelector(".card-container")

console.log(card_container.classList);

p_radio1.addEventListener('click', () => {
    p_radio1.style.background = "#000"; 
    p_radio2.style.background = "transparent";
    p_radio2.style.border = "1.5px solid #666";
    p_radio3.style.background = "transparent";
    p_radio3.style.border = "1.5px solid #666";
    card_container.classList.add("show");
});

p_radio2.addEventListener("click", () => {
  p_radio2.style.background = "#000";   
  p_radio1.style.background = "transparent";
  p_radio1.style.border = "1.5px solid #666";
  p_radio3.style.background = "transparent";
  p_radio3.style.border = "1.5px solid #666";
  card_container.classList.remove("show");
});

p_radio3.addEventListener("click", () => {
  p_radio3.style.background = "#000";   
  p_radio2.style.background = "transparent";
  p_radio2.style.border = "1.5px solid #666";
  p_radio1.style.background = "transparent";
  p_radio1.style.border = "1.5px solid #666";
  card_container.classList.remove("show");
});

