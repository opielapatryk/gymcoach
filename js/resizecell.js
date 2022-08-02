let largest = 3
let widthh
document.addEventListener('keydown',resizeCell)

function resizeCell() {
    td.forEach(element => {
        if(element.innerText.length>=largest){
            element.style.width = 'max-content'
            widthh = element.clientWidth
        }
    setTimeout(() => {
        td.forEach(e=>{
            e.style.width = `${widthh}px`
        })
    }, 1000);   
})
}
document.addEventListener('DOMContentLoaded', resizeCell)