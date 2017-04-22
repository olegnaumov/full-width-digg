function setTextWidth(){
    document.querySelector(".story-detail-content").style.width = "80%";
}

function setImgWidth(){
    var storyImages = document.querySelectorAll(".detail-body img");
    for (var i=0; i < storyImages.length; i++){
        var img = storyImages[i];

        img.style.width = "100%";
        img.style.maxWidth = img.naturalWidth + 'px';
    }
}

setTextWidth();
setImgWidth();