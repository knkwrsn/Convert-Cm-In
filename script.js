const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");
const EUR = document.querySelector("#eu"),
THB = document.querySelector("#th");

window.addEventListener("load", () => centimeter.focus());
window.addEventListener("load", () => EUR.focus());

centimeter.addEventListener("input", ()=>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value = "";

});
inch.addEventListener("input", ()=>{
    centimeter.value = (inch.value * 2.54).toFixed(2);
    if(!inch.value) centimeter.value = "";
});

EUR.addEventListener("input", ()=>{
    THB.value = (EUR.value * 37.44).toFixed(2);
    if(!EUR.value) THB.value = "";

});
THB.addEventListener("input", ()=>{
    EUR.value = (THB.value * 1).toFixed(2);
    if(!THB.value) EUR.value = "";

});


