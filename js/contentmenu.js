const menu = document.querySelector('menu')
const scope = document.querySelector('body')
scope.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    const { clientX:mouseX,clientY:mouseY} = e
    menu.style.top = `${mouseY}px`
    menu.style.left = `${mouseX}px`
    menu.classList.remove('visible')
    setTimeout(()=>{menu.classList.add('visible')}) //settimeout is used to quit event loop, use this on arrow, or gen table
    
})
scope.addEventListener('click',(e)=>{
    if(e.target.offsetParent != menu){
        menu.classList.remove('visible')
    }
})