async function calc() {

    const element = document.getElementById("checkout-button-1");
    const elementTwo = document.getElementById("checkout-button-plan_FmS3HONbzTCxGl");

    const element5 = document.getElementById("checkout-button-plan_G1OnSt8DIms1PY");
    const element6 = document.getElementById("checkout-button-plan_G1O8Rztm6fFf4R");


    if (!element || !elementTwo || !element5 || !element6) {
        return false;
    }




    element.classList.add("hide");
    elementTwo.classList.add("hide");
    element5.classList.add("hide");
    element6.classList.add("hide");

    if (document.getElementById("annual").checked) {

        document.getElementById('plusPricing').innerHTML = '$50.00 ';
        document.getElementById('enterprisePricing').innerHTML = '$1000 ';
        document.getElementById('plusPricingText').innerText = 'Billed yearly';

        document.getElementById('enterprisePricingText').innerText = 'Billed yearly';
        const element3 = document.getElementById("checkout-button-plan_FmS3HONbzTCxGl");
        element3.classList.remove("hide");

        const element2 = document.getElementById("checkout-button-plan_G1OnSt8DIms1PY");
        element2.classList.remove("hide");

    } else {

        document.getElementById('plusPricing').innerHTML = '$4.99 ';
        document.getElementById('plusPricingText').innerText = 'Billed monthly';
        document.getElementById('enterprisePricing').innerHTML = '$99.99 ';
        document.getElementById('enterprisePricingText').innerText = 'Billed monthly';



        const element4 = document.getElementById("checkout-button-plan_G1O8Rztm6fFf4R");
        element4.classList.remove("hide");

        const element = document.getElementById("checkout-button-1");
        element.classList.remove("hide");

    }
}

async function eventListner() {
    let pricingTableSwitch = document.getElementById("annual");

    if (pricingTableSwitch) {
        pricingTableSwitch.addEventListener("change", calc);
    }
}

export {
    calc,
    eventListner
}; // a list of exported variables