var slideIndexVideo = 1;


async function plusSlidesVideo(n) {
    showSlidesVideo(slideIndexVideo += n);
}

async function currentSlideVideo(n) {
    showSlidesVideo(slideIndexVideo = n);
}

async function showSlidesVideo(n) {

    let i;
    const slides = document.getElementsByClassName("mySlidesVideo");
    const dotVideos = document.getElementsByClassName("dotVideo");

    if (slides.length > 0 && dotVideos.length > 0) {
    



    if (n < 1) {
        slideIndexVideo = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotVideos.length; i++) {
        dotVideos[i].className = dotVideos[i].className.replace(" active", "");
    }
    slides[slideIndexVideo - 1].style.display = "block";
    dotVideos[slideIndexVideo - 1].className += " active";

}


}



export {
    plusSlidesVideo,
    currentSlideVideo,
    showSlidesVideo
}; // a list of exported variables