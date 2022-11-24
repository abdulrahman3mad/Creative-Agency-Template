import { appendTo } from "./utilities.js"

let GalleryPopUp = (function () {
    let popUp = "";
    let popupImg = "";

    let setOverlay = () => {
        let overlay = document.createElement("div");
        overlay.classList.add("popup-overlay");
        appendTo(overlay, document.body);
    }

    let createPopUpBox = () => {
        popUp = document.createElement("div");
        popUp.classList.add("popup");
    }

    let createPopUpHeading = (imgAlt) => {
        if (imgAlt) {
            let imgDesc = document.createElement("p");
            let imgDescText = document.createTextNode(imgAlt);
            imgDesc.classList.add("popup-desc");
            appendTo(imgDescText, imgDesc);
            appendTo(imgDesc, popUp);
        }
    }

    let addImg = (imgSrc) => {
        popupImg = document.createElement("img");
        popupImg.src = imgSrc
        appendTo(popupImg, popUp)
    }

    let setExitIcon = () => {
        let exitBtn = document.createElement("div");
        exitBtn.classList.add("exit");
        appendTo(document.createTextNode("X"), exitBtn)
        appendTo(exitBtn, popUp)
        addExitFunction(exitBtn);
    }

    let addExitFunction = (exitBtn) => {
        exitBtn.addEventListener("click", () => {
            document.querySelector(".popup-overlay").remove()
            document.querySelector(".popup").remove()
        })
    }

    let createPopUp = (imgSrc, imgAlt) => {
        createPopUpBox();
        createPopUpHeading(imgAlt);
        addImg(imgSrc);
        setExitIcon();
        setFocusOutExit();
        return popUp;
    }

    let setFocusOutExit = (target) => {
        if (!target?.closest("img")) {
            document.querySelector(".popup-overlay")?.remove()
            document.querySelector(".popup")?.remove()
        }
    }

    return {
        createPopUp,
        setOverlay,
        addImg,
        createPopUpBox,
        setExitIcon,
        setFocusOutExit
    }
})();

export default GalleryPopUp;