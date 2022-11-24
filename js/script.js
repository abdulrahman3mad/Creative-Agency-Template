import WelcomeSlider from "/js/welcomeSlider.js"
import SettingBox from "/js/settingBox.js"
import skillsProgress from "/js/skillsProgress.js";
import GalleryPopUp from "/js/GalleryPopUp.js";
import NavigationBullets from "/js/NavigationBullets.js";
import NavigationSettingBox from "/js/NavigationSettingBox.js";
import { toggleClasses } from "/js/utilities.js"

let ourSkills = document.querySelector(".our-skills")

// General Setting 
window.addEventListener("load", function () {
    let sliderData = JSON.parse(localStorage.getItem("autoSlider"));
    WelcomeSlider.setSliderStart(sliderData?.count ? sliderData.count : -1);
    if (sliderData) {
        if (sliderData.auto == "true" || !sliderData) WelcomeSlider.activeAutoSlider()
        else if (sliderData.auto == "false") WelcomeSlider.disActiveAutoSlider();
    } else {
        WelcomeSlider.activeAutoSlider()
    }

    skillsProgress.setProgressBars()
    let navSystem = this.localStorage.getItem("navSystem")
    if (navSystem) {
        NavigationSettingBox.config(navigationSystem, navigationSettingBtns)
        NavigationSettingBox.toggleNavSystem(navSystem);
    }

    let colorData = JSON.parse(localStorage.getItem("clr"))
    if (colorData && colorData.clr)
        SettingBox.ColorsBox.setToRootClr(colorData.clr, document.querySelector('.' + colorData.colorClass));
})

window.addEventListener("scroll", () => {
    (window.scrollY >= ourSkills.offsetTop - 300) && skillsProgress.setBarsValues()
})

let prevImg = document.getElementById("prev-img");
let nextImg = document.getElementById("next-img");
prevImg.addEventListener("click", () => WelcomeSlider.slideLeft())
nextImg.addEventListener("click", () => WelcomeSlider.slideRight())

document.addEventListener("click", function (e) {
    if (e.target.closest(".setting-icon")) {
        SettingBox.view()
        return
    }
    if (!e.target.closest(".setting-box")) SettingBox.hide();

    GalleryPopUp?.setFocusOutExit(e.target);
})
//----------------

// Colors Btns Setting
let colors = document.querySelectorAll(".clr");
colors.forEach((color) => {
    color.addEventListener("click", () => {
        let clr = getComputedStyle(color).backgroundColor
        SettingBox.ColorsBox.setToRootClr(clr, color);
        SettingBox.ColorsBox.saveInLocal({ clr, colorClass: color.classList[1] })
    })
})
//-----------------

// Background Setting
let bkBtns = document.querySelectorAll(".background-setting .bk-btn")

bkBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        toggleClasses(btn, bkBtns, "active")
        if (btn.dataset.activate == "true") WelcomeSlider.activeAutoSlider();
        else WelcomeSlider.disActiveAutoSlider();
    })
})

let galleryImgs = document.querySelectorAll(".our-gallery .imgs .img-container img");
galleryImgs.forEach((img) => {
    img.addEventListener("click", function () {
        let popUp = GalleryPopUp.createPopUp(img.src, img.getAttribute("alt"));
        document.body.append(popUp)
        GalleryPopUp.setOverlay();
    })
})



// Navigation Bullets 
let navigationSystem = document.querySelector(".navi-bullets");
let navigationBullets = document.querySelectorAll(".navi-bullet");
let navItems = document.querySelectorAll(".nav-item");

NavigationBullets.navTo(navigationBullets);
NavigationBullets.navTo(navItems);


let navigationSettingBtns = document.querySelectorAll(".navigation-bullets-setting .bk-btn");

navigationSettingBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.dataset.activate == "true" ? navigationSystem.style.display = "flex" : navigationSystem.style.display = "none"
        toggleClasses(btn, navigationSettingBtns, "active");
        localStorage.setItem("navSystem", btn.dataset.activate);
    })
})


let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => SettingBox.reset())

document.querySelector(".nav-list-toggle").addEventListener("click", function () {
    document.querySelector(".nav-items").classList.toggle("none")
})
