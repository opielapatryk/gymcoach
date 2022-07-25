let largest = 5
document.addEventListener('keydown',()=>{
        td.forEach(element => {
            if(element.innerText.length>largest){
                largest = element.innerText.length
            }
        setTimeout(() => {
            td.forEach(e=>{
                e.style.width = `${largest*0.7}em` 
            })
        }, 1000);
    })
})
