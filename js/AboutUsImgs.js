let imgs = [];
for(let i=1; i<=5; i++){
    imgs.push(`clr-${i}.svg`)
}

let aboutUsImg = document.querySelector("#about-us .img-box img")
let AboutUsImage = (function(){

    let setImg = (clr)=>{
        let img = imgs.find((img)=> img.includes(clr));
        aboutUsImg.src= `./imgs/colored-imgs/${img}`;
    }

    return {
        setImg
    }
}())

export default AboutUsImage