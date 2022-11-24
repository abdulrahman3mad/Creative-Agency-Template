import ColorsBox from "./colorsBox.js"
import NavigationSettingBox from "./NavigationSettingBox.js"

let SettingBox = (function () {
    let settingBox = document.querySelector("#setting-box");
    let settingBoxGearIcon = document.querySelector("#setting-icon > *"); // > *, so if we decide to replace font awesome with another library, it doesn't make an issue and lots of other bugs to be fixed


    let hide = () => {
        settingBox.classList.remove("viewed");
        settingBoxGearIcon.classList.remove("fa-spin");
    }

    let view = () => {
        if (settingBox.classList.contains("viewed")) {
            hide();
            return;
        }

        settingBox.classList.add("viewed");
        settingBoxGearIcon.classList.add("fa-spin");
    }

    let reset = () => {
        window.location.reload();
        localStorage.clear()
    }

    return {
        view,
        hide,
        ColorsBox,
        NavigationSettingBox,
        reset
    }
})()


export default SettingBox
