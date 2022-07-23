const darkmode = document.querySelector('.dark-mode')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('mode') == 'light'){
            body.style.background = 'linear-gradient(to right, rgb(233, 235, 255), rgb(224, 255, 224))'
            nav.style.boxShadow = '#b9d0ff 0 0 100px 5px'
            nav.style.background = 'linear-gradient(to right, rgb(0, 115, 255), green)'
            darkmode.style.color = 'white'
        } else {
            body.style.background = 'linear-gradient(to right, rgb(9, 14, 73), rgb(11, 83, 11))'
            nav.style.boxShadow = '#06193e 0 0 100px 5px'
            nav.style.background = 'linear-gradient(to right, rgb(0, 43, 95), rgb(0, 71, 0))'
            darkmode.style.color = 'black'
        }
})

darkmode.addEventListener('click',()=>{
    if(localStorage.getItem('mode') == 'light'){
        localStorage.setItem('mode', 'dark')
        window.location.reload()
    } else {
        localStorage.setItem('mode', 'light')
         window.location.reload()
    }
})