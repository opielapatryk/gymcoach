let del = document.querySelectorAll('.del')
let delIcon = document.querySelectorAll('.del-icon')

delIcon.forEach(e=>{
    e.addEventListener('click',(e)=>{
        e.target.parentElement.remove()
        localStorage.setItem(listname, add[lista].parentElement.parentElement.nextSibling.nextSibling.innerHTML)
    })
})

let lista
let listname
del[0].addEventListener('click', ()=>{
    for(let i = 0; i<del[0].parentElement.parentElement.nextElementSibling.children.length;i++){
            del[0].parentElement.parentElement.nextElementSibling.children[i].firstChild.style.visibility='visible'
        }  
    lista = 0 
    listname = 'chestlist'
})
del[1].addEventListener('click', ()=>{
    for(let i = 0; i<del[1].parentElement.parentElement.nextElementSibling.children.length;i++){
            del[1].parentElement.parentElement.nextElementSibling.children[i].firstChild.style.visibility='visible'
        }  
    lista = 1 
    listname = 'backlist'
})
del[2].addEventListener('click', ()=>{
    for(let i = 0; i<del[2].parentElement.parentElement.nextElementSibling.children.length;i++){
            del[2].parentElement.parentElement.nextElementSibling.children[i].firstChild.style.visibility='visible'
        }  
    lista = 2 
    listname = 'armlist'
})
del[3].addEventListener('click', ()=>{
    for(let i = 0; i<del[3].parentElement.parentElement.nextElementSibling.children.length;i++){
            del[3].parentElement.parentElement.nextElementSibling.children[i].firstChild.style.visibility='visible'
        }  
    lista = 3 
    listname = 'shoulderlist'
})
del[4].addEventListener('click', ()=>{
    for(let i = 0; i<del[4].parentElement.parentElement.nextElementSibling.children.length;i++){
            del[4].parentElement.parentElement.nextElementSibling.children[i].firstChild.style.visibility='visible'
        }  
    lista = 4 
    listname = 'leglist'
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
