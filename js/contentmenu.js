const menu = document.querySelector('menu')
const scope = document.querySelector('body')
scope.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    const { clientX:mouseX,clientY:mouseY} = e
    const {normalizedX,normalizedY} = normalizePoziton(mouseX,mouseY)
    menu.style.top = `${normalizedY}px`
    menu.style.left = `${normalizedX}px`
    menu.classList.remove('visible')
    setTimeout(()=>{menu.classList.add('visible')}) //settimeout is used to quit event loop, use this on arrow, or gen table
})
scope.addEventListener('click',(e)=>{
    if(e.target.offsetParent != menu){
        menu.classList.remove('visible')
    }
})

const normalizePoziton = (mouseX,mouseY) => {
    const {
        left: scopeOffSetX,
        top: scopeOffsetY,
    } = scope.getBoundingClientRect()

    const scopeX = mouseX - scopeOffSetX
    const scopeY = mouseY - scopeOffsetY

    const outOfBoundsOnX = scopeX + menu.clientWidth > scope.clientWidth
    const outOfBoundsOnY = scopeY + menu.clientHeight > scope.clientHeight

    let normalizedX = mouseX
    let normalizedY = mouseY

    if(outOfBoundsOnX){
        normalizedX = scopeOffSetX + scope.clientWidth - menu.clientWidth
    }

    if(outOfBoundsOnY){
        normalizedY = scopeOffsetY + scope.clientHeight - menu.clientHeight
    }

    return {normalizedX,normalizedY}
}