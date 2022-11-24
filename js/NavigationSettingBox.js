import {toggleClasses} from "./utilities.js"

let NavigationSettingBox = (function () {
    let navigationSystem = null;
    let navigationSettingBtns = null;

    let config = (system, btns) => {
        navigationSystem = system;
        navigationSettingBtns = btns
    }

    let toggleNavSystem = (navSystemState) => {
        if (navSystemState == "true") {
            navigationSystem.style.display = "flex";
            toggleClasses(document.querySelector(".navigation-bullets-setting .bk-btn.active-btn"), navigationSettingBtns, "active");
            return;
        }

        navigationSystem.style.display = "none";
        toggleClasses(document.querySelector(".navigation-bullets-setting .bk-btn.unactive-btn"), navigationSettingBtns, "active");
    }

    return {
        toggleNavSystem,
        config
    }
})()

export default NavigationSettingBox