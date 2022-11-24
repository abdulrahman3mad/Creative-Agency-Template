let toggleClasses = function(toActiveItem, toDisactiveItems, className){
    toDisactiveItems.forEach((item)=>{
        item.classList.remove(className)
    })  

    toActiveItem && toActiveItem.classList.add(className);
}

let getData = function(){
    let clr = localStorage.getItem("clr")
    let bkActive = localStorage.getItem("bk-active")
    return {clr, bkActive}
}

let appendTo = function(object, container){
    container.append(object);
}

export {toggleClasses, getData, appendTo}