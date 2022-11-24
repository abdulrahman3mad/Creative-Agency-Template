import {toggleClasses} from "./utilities.js"
import AboutUsImage from "./AboutUsImgs.js"
let colors = document.querySelectorAll(".clr");

let ColorsBox = (function(){
    let setToRootClr = (clr, colorIcon)=>{
        document.documentElement.style.setProperty("--main-clr", clr); // add as inline style
        toggleClasses(colorIcon, colors, "active");
        AboutUsImage.setImg(colorIcon.classList[1]);
    }    

    let saveInLocal = (data)=> localStorage.setItem("clr", JSON.stringify(data))

    return {
        setToRootClr,
        saveInLocal
    }
})()

export default ColorsBox

