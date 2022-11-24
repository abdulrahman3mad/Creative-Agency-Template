let skills = {
    "html": 70,
    "css": 50,
    "js": 40,
    "React":60
}

let skillsProgress = (function () {
    let skillsProgress = document.querySelector(".skills-progress");
    let skillsBars = [];
    
    let setProgressBars = () => {
        Object.keys(skills).map((skill) => {
            skillsProgress.innerHTML += `
                <div class="skill-progress ${skill}">
                        <span class="skill-name">${skill.toUpperCase()}</span>
                        <div class="progress-bar">
                            <div class="progressed"></div>
                        </div>
                </div>` 
            skillsBars = document.querySelectorAll(".skill-progress");
        })
    }

    let setBarsValues = ()=>{
        skillsBars.forEach((skillBar)=>{
            let bar = skillBar.querySelector(".progressed");
            bar.style.width = skills[skillBar.classList[1]] + "%"
        })
    }

    return {setProgressBars, setBarsValues}
})()

export default skillsProgress;