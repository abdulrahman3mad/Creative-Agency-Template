

let NavigationBullets = (function () {
    let navTo = (navList) => {
        navList.forEach((navi) => {
            navi.addEventListener("click", () => {
                window.scrollTo({
                    left: 0,
                    top: document.getElementById(navi.dataset.navTo).offsetTop,
                    behavior: 'smooth'
                })
            })
        })
    }
    return {
        navTo
    }
})()


export default NavigationBullets