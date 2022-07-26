const item = document.querySelectorAll('.item')
const color = document.querySelector('.color')
const colorcontainer = document.querySelector('.selectcolor')
item[0].addEventListener("click",(e)=>{
    colorcontainer.style.display = 'inline'
})

color.addEventListener('input',()=>{
    focusedcell.style.background = color.value 
});