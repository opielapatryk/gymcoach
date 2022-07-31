const add = document.querySelectorAll('.add')
const del = document.querySelectorAll('.del')
const addinput = document.querySelector('.add-input')
const addexcinput = document.querySelector('#addexc')
const subaddexc = document.querySelector('#subaddexc')

add[0].addEventListener('click', ()=>{
    addinput.style.display = 'block'
})
subaddexc.addEventListener('click', ()=>{
    let newchild = document.createElement('li')
    newchild.setAttribute('draggable', 'true')
    newchild.classList.add('move')
    newchild.innerText = addexcinput.value
    add[0].parentElement.parentElement.nextSibling.nextSibling.appendChild(newchild)
    addinput.style.display = 'none'
})