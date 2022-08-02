let largest = 5
// let largestelement
document.addEventListener('keydown',resizeCell)

function resizeCell() {
    td.forEach(element => {
        if(element.innerText.length>largest){
            // largestelement = element
            largest = element.innerText.length
        }
    setTimeout(() => {
        td.forEach(e=>{
            e.style.width = `${largest*.5}em` 
        })
    }, 1000);  
})
}
document.addEventListener('DOMContentLoaded', resizeCell)
// largestelement.addEventListener('keydown',(event)=>{
//                 while(largest>5){
//                     let KeyID = event.keyCode;
//                     switch(KeyID)
//                     {
//                         case 8:
//                         largest -= 1
//                         break; 
//                         default:
//                         break;
//                     }
//                 }
//             })   