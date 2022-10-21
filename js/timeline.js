(function ($) {
    "use strict";
    $().timelinr({
        orientation: 'vertical',
        issuesSpeed: 300,
        datesSpeed: 100,
        arrowKeys: 'true',
        startAt: 1
    })
}(jQuery));

let currentIndex = 0;

function pausePreviosVideo() {
    const v1 = document.getElementById("video1");
    const v2 = document.getElementById("video2");
    v1.pause();
    v2.pause();
    if (currentIndex === 4) { 
        v1.currentTime = 0;
        v1.play();
    } else if (currentIndex === 5) {
        v2.currentTime = 0;
        v2.play();
    }

}


function playVideo(id) {
    const v = document.getElementById(id);
    v.currentTime = 0;
    v.play();       
}