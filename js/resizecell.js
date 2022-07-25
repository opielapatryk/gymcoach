let largest = 5
let newlargest
document.addEventListener('keydown',()=>{
        td.forEach(element => {
            if(element.innerText.length>largest){
                newlargest = element.innerText.length
            }
        setTimeout(() => {
            td.forEach(e=>{
                e.style.width = `${newlargest*0.7}em` 
            })
        }, 1000);
    })
})
