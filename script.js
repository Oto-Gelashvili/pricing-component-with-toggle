var toggle = document.querySelector(".toggle");
var price = document.querySelectorAll(".type-price");
toggle.addEventListener("click",function(){
    if(toggle.style.justifyContent !== 'left'){
        toggle.style.justifyContent = 'left';
        price[0].innerHTML = "199.99"
        price[1].innerHTML = "249.99"
        price[2].innerHTML = "399.99"

    }else{
        toggle.style.justifyContent = 'right';
        price[0].innerHTML = "19.99"
        price[1].innerHTML = "24.99"
        price[2].innerHTML = "39.99"
    }
});
