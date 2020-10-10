function load() {

    let scrollpos = window.scrollY
    const header = document.querySelector(".header")
    const header_height = header.offsetHeight


    const add_class_on_scroll = () => header.classList.add("fade-in")
    const remove_class_on_scroll = () => header.classList.remove("fade-in")


    window.addEventListener('scroll', function () {
        scrollpos = window.scrollY

        if (scrollpos >= header_height) {
            add_class_on_scroll()
        } else {
            remove_class_on_scroll()
        }


    })



}

function dropdown(){
   
        document.getElementById("myDropdown").classList.toggle("show");

      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }
}



export {
    load,
    dropdown
}; // a list of exported variables