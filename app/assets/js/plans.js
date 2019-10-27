

function calc() {
    console.log(document.getElementById("annual").checked);

    const element = document.getElementById("checkout-button-1");
    element.classList.add("hide");

    const elementTwo = document.getElementById("checkout-button-plan_FmS3HONbzTCxGl");
    elementTwo.classList.add("hide");



    const element5 = document.getElementById("checkout-button-plan_G1OnSt8DIms1PY");
    element5.classList.add("hide");

    const element6 = document.getElementById("checkout-button-plan_G1O8Rztm6fFf4R");
    element6.classList.add("hide");




    if (document.getElementById("annual").checked) {

        document.getElementById('plusPricing').innerHTML = '$50.00 ';
        document.getElementById('enterprisePricing').innerHTML = '$1000 ';
        document.getElementById('plusPricingText').innerText = 'Yearly';

        document.getElementById('enterprisePricingText').innerText = 'Yearly';
        const element3 = document.getElementById("checkout-button-plan_FmS3HONbzTCxGl");
        element3.classList.remove("hide");

        const element2 = document.getElementById("checkout-button-plan_G1OnSt8DIms1PY");
        element2.classList.remove("hide");

    } else {

        document.getElementById('plusPricing').innerHTML = '$4.99 ';
        document.getElementById('plusPricingText').innerText = 'Monthly';
        document.getElementById('enterprisePricing').innerHTML = '$99.99 ';
        document.getElementById('enterprisePricingText').innerText = 'Monthly';


        
        const element4 = document.getElementById("checkout-button-plan_G1O8Rztm6fFf4R");
        element4.classList.remove("hide");

        const element = document.getElementById("checkout-button-1");
        element.classList.remove("hide");




    }
}