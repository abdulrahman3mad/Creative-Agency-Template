// DOM
let welcomeSection = document.getElementById("welcome");
let prevImg = document.getElementById("prev-img");
let nextImg = document.getElementById("next-img");

// Welcome Slider -----

// General Functions 
let imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
let imgCount = -1;
let slider = () => {
    imgCount = (imgCount + 1) % imgs.length;
    welcomeSection.style.backgroundImage = `url("../imgs/${imgs[imgCount]}")`
}
setInterval(slider, 5000)


// Events Functions 
prevImg.addEventListener("click", () => {
    imgCount = imgCount ? imgCount - 1 : imgs.length - 1
    welcomeSection.style.backgroundImage = `url("../imgs/${imgs[imgCount]}")`
})

nextImg.addEventListener("click", () => {
    imgCount = (imgCount + 1) % imgs.length;
    welcomeSection.style.backgroundImage = `url("../imgs/${imgs[imgCount]}")`
})
// -------


