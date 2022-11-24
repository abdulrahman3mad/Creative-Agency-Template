import { toggleClasses } from "./utilities.js";

let WelcomeSlider = (function(){
    let welcomeSection = document.getElementById("welcome");
    let intervalID = "";
    let intervalTime = 4000;
    let defaultSliding = true;
    let autoSliding = false; 

    let imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
    let imgCount = -1;

    let reset = ()=>{
        imgCount = -1;
        autoSliding = defaultSliding;
        toggleClasses(document.querySelector(".background-setting .active-btn"), document.querySelectorAll(".background-setting .bk-btn"), "active");
        localStorage.setItem("autoSlider", JSON.stringify({auto:autoSliding.toString(), count:imgCount}));
        slideRight();
    }

    let setSliderStart = (count) => {
        imgCount = count;
        (imgCount != -1) ? welcomeSection.style.backgroundImage = `url("../imgs/slider/${imgs[imgCount]}")`:null;
    }

    let setIntervalTime = (intervalTime)=>{
        intervalTime = intervalTime
    }

    let slideLeft = ()=>{
        imgCount = imgCount <= 0 ? imgs.length - 1: imgCount - 1;
        welcomeSection.style.backgroundImage = `url("../imgs/slider/${imgs[imgCount]}")`
        localStorage.setItem("autoSlider", JSON.stringify({auto:autoSliding, count:imgCount}));
    }

    let slideRight = ()=>{
        imgCount = (imgCount + 1) % imgs.length;
        welcomeSection.style.backgroundImage = `url("../imgs/slider/${imgs[imgCount]}")`
        localStorage.setItem("autoSlider", JSON.stringify({auto:autoSliding.toString(), count:imgCount}));
    }

    let activeAutoSlider = ()=> {
        autoSliding = true;
        intervalID = setInterval(slideRight, intervalTime);
        toggleClasses(document.querySelector(".background-setting .active-btn"), document.querySelectorAll(".background-setting .bk-btn"), "active");
        localStorage.setItem("autoSlider", JSON.stringify({auto:autoSliding.toString(), count:imgCount}));
    }

    let disActiveAutoSlider = ()=> {
        autoSliding = false;
        localStorage.setItem("autoSlider", JSON.stringify({auto:autoSliding.toString(), count:imgCount}));
        toggleClasses(document.querySelector(".background-setting .unactive-btn"), document.querySelectorAll(".background-setting .bk-btn"), "active");
        clearInterval(intervalID);
    }

    return {
        activeAutoSlider, 
        disActiveAutoSlider,
        slideLeft, 
        slideRight,
        setIntervalTime,
        setSliderStart,
        reset
    }
})()

export default WelcomeSlider