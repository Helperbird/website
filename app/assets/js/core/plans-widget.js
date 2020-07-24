async function calc() {

    let element = document.getElementById("checkout-button-startups");
    let elementTwo = document.getElementById("checkout-button-large");
    let elementThree = document.getElementById("checkout-button-massive");
    let elementFour = document.getElementById("checkout-button-enterprise");









    element.classList.add("hide");
    elementTwo.classList.add("hide");
    elementThree.classList.add("hide");
    elementFour.classList.add("hide");

    if (document.getElementById("annual-widget").checked) {


        document.getElementById('startupPricing').innerHTML = '$400';
        document.getElementById('largePricing').innerHTML = '$900';
        document.getElementById('massivePricing').innerHTML = '$1200';
        document.getElementById('enterprisePricing').innerHTML = '$3000';



        let  element = document.getElementById("checkout-button-startups-monthly");
        let  elementTwo = document.getElementById("checkout-button-large-monthly");
        let      elementThree = document.getElementById("checkout-button-massive-monthly");
        let      elementFour = document.getElementById("checkout-button-enterprise-monthly");
  
          element.classList.add("hide");
          elementTwo.classList.add("hide");
          elementThree.classList.add("hide");
          elementFour.classList.add("hide");
  
  
         let elementYearly = document.getElementById("checkout-button-startups");
         let   elementTwoYearly = document.getElementById("checkout-button-large");
         let   elementThreeYearly = document.getElementById("checkout-button-massive");
         let   elementFourYearly = document.getElementById("checkout-button-enterprise");
  
          elementYearly.classList.remove("hide");
          elementTwoYearly.classList.remove("hide");
          elementThreeYearly.classList.remove("hide");
          elementFourYearly.classList.remove("hide");

    } else {

        document.getElementById('startupPricing').innerHTML = '$40';
        document.getElementById('largePricing').innerHTML = '$90';
        document.getElementById('massivePricing').innerHTML = '$120';
        document.getElementById('enterprisePricing').innerHTML = '$300';


      let  element = document.getElementById("checkout-button-startups-monthly");
      let  elementTwo = document.getElementById("checkout-button-large-monthly");
      let      elementThree = document.getElementById("checkout-button-massive-monthly");
      let      elementFour = document.getElementById("checkout-button-enterprise-monthly");

        element.classList.remove("hide");
        elementTwo.classList.remove("hide");
        elementThree.classList.remove("hide");
        elementFour.classList.remove("hide");


       let elementYearly = document.getElementById("checkout-button-startups");
       let   elementTwoYearly = document.getElementById("checkout-button-large");
       let   elementThreeYearly = document.getElementById("checkout-button-massive");
       let   elementFourYearly = document.getElementById("checkout-button-enterprise");

        elementYearly.classList.add("hide");
        elementTwoYearly.classList.add("hide");
        elementThreeYearly.classList.add("hide");
        elementFourYearly.classList.add("hide");
  

    }
}

async function eventListner() {
    let pricingTableSwitch = document.getElementById("annual-widget");

    if (pricingTableSwitch) {
        pricingTableSwitch.addEventListener("change", calc);
    }
}

export {
    calc,
    eventListner
}; // a list of exported variables