// Setting Box --- 
// DOM
let settingBox = document.querySelector("#setting-box");
let settingBoxGearIcon = document.querySelector("#setting-icon > *"); // > *, so if we decide to replace font awesome with another library, it doesn't make an issue and lots of other bugs to be fixed
let colors = document.querySelectorAll(".clr");

//Events Functions
settingBoxGearIcon.addEventListener("click", ()=>{
    settingBox.classList.toggle("viewed");
    settingBoxGearIcon.classList.toggle("fa-spin");
})

document.addEventListener("click", function(e){
    if(!e.target.closest(".setting-box")){
        settingBox.classList.remove("viewed");
        settingBoxGearIcon.classList.remove("fa-spin");
    }
})

// Colors Settings ---------------
window.addEventListener("load", ()=>{
    let colorData = JSON.parse(localStorage.getItem("clr"))
    if(colorData && colorData.clr){
        document.documentElement.style.setProperty("--main-clr", colorData.clr)
        toggleActiveClrs(document.querySelector("." + colorData.colorClass));
    } 
})

colors.forEach((color)=>{
    color.addEventListener("click", ()=>{
        //console.log(getComputedStyle(color).backgroundColor) // getComputedStyle: gets all style either the inline and the external ones
        //console.log(color.style.backgroundColor) // only gets the inline ones 
        let iconClr = getComputedStyle(color).backgroundColor;
        document.documentElement.style.setProperty("--main-clr", iconClr); // add as inline style
        toggleActiveClrs(color);
        localStorage.setItem("clr", JSON.stringify({
            clr: iconClr, 
            colorClass: color.classList[1]
        }))
    })
})

let toggleActiveClrs = function(color){
    colors.forEach((clr)=>{
        clr.classList.remove("active")
    })  

    color.classList.add("active");
}
// -------------------

// Welcome Slider -----
// DOM
let welcomeSection = document.getElementById("welcome");
let prevImg = document.getElementById("prev-img");
let nextImg = document.getElementById("next-img");


// General Functions 
let imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
let imgCount = -1;
let slider = () => {
    imgCount = (imgCount + 1) % imgs.length;
    welcomeSection.style.backgroundImage = `url("../imgs/${imgs[imgCount]}")`
}
setInterval(slider, 30000)


// Events Functions 
prevImg.addEventListener("click", () => {
    imgCount = imgCount <= 0 ? imgs.length - 1: imgCount - 1;
    welcomeSection.style.backgroundImage = `url("../imgs/${imgs[imgCount]}")`
})

nextImg.addEventListener("click", () => {
    imgCount = (imgCount + 1) % imgs.length;
    welcomeSection.style.backgroundImage = `url("../imgs/${imgs[imgCount]}")`
})
// -------
