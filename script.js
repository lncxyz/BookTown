const aHome = document.getElementById("home");

aHome.addEventListener("click", () =>{
  alert("you are at home");
});

let open = document.getElementById("premium");
let buy = document.getElementById("buy")
let close = document.getElementById("close");

open.addEventListener("click", () => {
  buy.classList.add("buy1");
});
close.addEventListener("click", () => {
  buy.classList.remove("buy1");
});