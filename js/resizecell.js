let largest = 5
document.addEventListener('keydown',resizeCell)

function resizeCell() {
    td.forEach(element => {
        if(element.innerText.length>largest){
            largest = element.innerText.length
        }
    setTimeout(() => {
        td.forEach(e=>{
            e.style.width = `${largest*0.4}rem` 
        })
    }, 1000);  
})
}

