const item = document.querySelectorAll('.item')
const color = document.querySelector('.color')
const colorcontainer = document.querySelector('.selectcolor')


//change cell color
item[0].addEventListener("click",(e)=>{
    colorcontainer.style.display = 'inline'
    
    color.addEventListener('input',()=>{
        if(focusedcell){
        focusedcell.style.background = color.value 
        }
    });
})



//change table color
item[1].addEventListener("click",(e)=>{
    colorcontainer.style.display = 'inline'
    color.removeEventListener('input',()=>{
        focusedcell.style.background = color.value 
    });
    color.addEventListener('input',()=>{
        td.forEach(element => {
            element.style.background = color.value
        });
    });
})

