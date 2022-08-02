const add = document.querySelectorAll('.add')
const del = document.querySelectorAll('.del')
let delIcon = document.querySelectorAll('.del-icon')
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
    newchild.innerHTML = `<i class="fa fa-trash-o del-icon"></i> ${addexcinput.value}`
    newchild.classList.add('move')
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

delIcon.forEach(e=>{
    e.addEventListener('click',(e)=>{
        e.target.parentElement.remove()
        delIcon.forEach(el=>{
            el.style.visibility='hidden'
        })
        localStorage.setItem(listname, add[lista].parentElement.parentElement.nextSibling.nextSibling.innerHTML)
        
    })
})

del[0].addEventListener('click', ()=>{
    lista = 0 
    listname = 'chestlist'
    for(let i = 0; i<del[0].parentElement.parentElement.nextElementSibling.children.length;i++){
        del[0].parentElement.parentElement.nextElementSibling.children[i].firstChild.style.visibility='visible'
        del[0].parentElement.parentElement.nextElementSibling.children[i].firstChild.addEventListener('click',(e)=>{
            e.target.parentElement.remove()
            delIcon.forEach(el=>{
                el.style.visibility='hidden'
            })
            localStorage.setItem(listname, add[lista].parentElement.parentElement.nextSibling.nextSibling.innerHTML) 
        })
    }  
})
del[1].addEventListener('click', ()=>{
    for(let i = 0; i<del[1].parentElement.parentElement.nextElementSibling.children.length;i++){
        del[1].parentElement.parentElement.nextElementSibling.children[i].firstChild.style.visibility='visible'
        del[1].parentElement.parentElement.nextElementSibling.children[i].firstChild.addEventListener('click',(e)=>{
            e.target.parentElement.remove()
            delIcon.forEach(el=>{
                el.style.visibility='hidden'
            })
            localStorage.setItem(listname, add[lista].parentElement.parentElement.nextSibling.nextSibling.innerHTML) 
        })
    }  
    lista = 1 
    listname = 'backlist'
})
del[2].addEventListener('click', ()=>{
    for(let i = 0; i<del[2].parentElement.parentElement.nextElementSibling.children.length;i++){
        del[2].parentElement.parentElement.nextElementSibling.children[i].firstChild.style.visibility='visible'
        del[2].parentElement.parentElement.nextElementSibling.children[i].firstChild.addEventListener('click',(e)=>{
            e.target.parentElement.remove()
            delIcon.forEach(el=>{
                el.style.visibility='hidden'
            })
            localStorage.setItem(listname, add[lista].parentElement.parentElement.nextSibling.nextSibling.innerHTML) 
        })
    }  
    lista = 2 
    listname = 'armlist'
})
del[3].addEventListener('click', ()=>{
    for(let i = 0; i<del[3].parentElement.parentElement.nextElementSibling.children.length;i++){
        del[3].parentElement.parentElement.nextElementSibling.children[i].firstChild.style.visibility='visible'
        del[3].parentElement.parentElement.nextElementSibling.children[i].firstChild.addEventListener('click',(e)=>{
            e.target.parentElement.remove()
            delIcon.forEach(el=>{
                el.style.visibility='hidden'
            })
            localStorage.setItem(listname, add[lista].parentElement.parentElement.nextSibling.nextSibling.innerHTML) 
        })
    }  
    lista = 3 
    listname = 'shoulderlist'
})
del[4].addEventListener('click', ()=>{
    for(let i = 0; i<del[4].parentElement.parentElement.nextElementSibling.children.length;i++){
        del[4].parentElement.parentElement.nextElementSibling.children[i].firstChild.style.visibility='visible'
        del[4].parentElement.parentElement.nextElementSibling.children[i].firstChild.addEventListener('click',(e)=>{
            e.target.parentElement.remove()
            delIcon.forEach(el=>{
                el.style.visibility='hidden'
            })
            localStorage.setItem(listname, add[lista].parentElement.parentElement.nextSibling.nextSibling.innerHTML) 
        })
    }   
    lista = 4 
    listname = 'leglist'
})
