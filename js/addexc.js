const add = document.querySelectorAll('.add')
const del = document.querySelectorAll('.del')
const addinput = document.querySelector('.add-input')
const addexcinput = document.querySelector('#addexc')
const subaddexc = document.querySelector('#subaddexc')
let lista
let listname
add[0].addEventListener('click', ()=>{
    addinput.style.display = 'block'
    lista = 0 
    listname = 'chestlist'
})
add[1].addEventListener('click', ()=>{
    addinput.style.display = 'block'
    lista = 1 
    listname = 'backlist'
})
add[2].addEventListener('click', ()=>{
    addinput.style.display = 'block'
    lista = 2 
    listname = 'armlist'
})
add[3].addEventListener('click', ()=>{
    addinput.style.display = 'block'
    lista = 3 
    listname = 'shoulderlist'
})
add[4].addEventListener('click', ()=>{
    addinput.style.display = 'block'
    lista = 4 
    listname = 'leglist'
})

subaddexc.addEventListener('click', ()=>{
    let newchild = document.createElement('li')
    newchild.setAttribute('draggable', 'true')
    newchild.classList.add('move')
    newchild.innerText = addexcinput.value
    add[lista].parentElement.parentElement.nextSibling.nextSibling.appendChild(newchild)
    localStorage.setItem(listname, add[lista].parentElement.parentElement.nextSibling.nextSibling.innerHTML)
    addinput.style.display = 'none'
})

let chestlist = localStorage.getItem('chestlist')
if(chestlist){
    add[0].parentElement.parentElement.nextSibling.nextSibling.innerHTML = chestlist
}
let backlist = localStorage.getItem('backlist')
if(backlist){
    add[1].parentElement.parentElement.nextSibling.nextSibling.innerHTML = backlist
}
let armlist = localStorage.getItem('armlist')
if(armlist){
    add[2].parentElement.parentElement.nextSibling.nextSibling.innerHTML = armlist
}
let shoulderlist = localStorage.getItem('shoulderlist')
if(shoulderlist){
    add[3].parentElement.parentElement.nextSibling.nextSibling.innerHTML = shoulderlist
}
let leglist = localStorage.getItem('leglist')
if(leglist){
    add[4].parentElement.parentElement.nextSibling.nextSibling.innerHTML = leglist
}
