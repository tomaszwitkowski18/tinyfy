const getCSSMini = document.querySelector('.css_input_mini');
const siteMini = document.querySelector('.site_mini');
const buttonMini = document.querySelector('.button_mini');
const name = "animation-empty";
buttonMini.addEventListener("click", function(){
    const cssInputValueMini = getCSSMini.value;
    const minifText = cssInputValueMini.split(' ').join('').replace(/\n/g, "");
    siteMini.value = minifText;
    if(getCSSMini.value == ""){
        if(!(getCSSMini.classList.contains(name))){
            getCSSMini.classList.add(name);
        };
        setTimeout(function(){
            getCSSMini.classList.remove(name);
        }, 451);
    }
});
