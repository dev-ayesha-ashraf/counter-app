                                         //   COUNTER APP 
var mainTitle = document.getElementById("title");
var btnIncrement = document.getElementById("increment");
var btndecremet = document.getElementById("decrement");
var btnreset = document.getElementById("reset");
var currentValue = 0;

btnIncrement.addEventListener('click' , () => {
    currentValue++;
    mainTitle.textContent = currentValue;
})


btndecremet.addEventListener('click' , () => {
    currentValue--;
    mainTitle.textContent = currentValue;
})

btnreset.addEventListener('click' , () => {
    currentValue = 0;
    mainTitle.textContent = currentValue;
})