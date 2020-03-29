function big({src, alt}) {
    const expandImg = document.getElementById("expandedImg");
    const imgText = document.getElementById("imgtext");
    expandImg.src = src;
    imgText.innerHTML = alt;
    expandImg.parentElement.style.display = "block";
}




export {
    big
}; // a list of exported variables