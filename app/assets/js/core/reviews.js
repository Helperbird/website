let reviewIndex = 1;


async function plusReview(n) {
    showReview(reviewIndex += n);
}

async function currentReview(n) {
    showReview(reviewIndex = n);
}

async function showReview(n) {

    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dotVideos = document.getElementsByClassName("dot");

    if (slides.length > 0 && dotVideos.length > 0) {
    

    if (n > slides.length) {
        reviewIndex = 1
    }
    if (n < 1) {
        reviewIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotVideos.length; i++) {
        dotVideos[i].className = dotVideos[i].className.replace(" active", "");
    }
    slides[reviewIndex - 1].style.display = "block";
    dotVideos[reviewIndex - 1].className += " active";

    }

}



export {
    plusReview,
    currentReview,
    showReview
}; // a list of exported variables