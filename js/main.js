const h1 = document.querySelectorAll('.h1')
const Ul = document.querySelectorAll('.ul')
h1.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.nextSibling.nextSibling.style.display==='block' ? e.nextSibling.nextSibling.style.display='none' : e.nextSibling.nextSibling.style.display='block'
    })
})
const date = new Date()
const dzisiaj = document.querySelector('.dzisiaj')
const fullMonth = ()=>{
    if (date.getMonth() + 1 < 10){
        return `0${date.getMonth() + 1}`
    } else {
        return date.getMonth() + 1
    }
}
dzisiaj.innerHTML = `${date.getDate()}.${fullMonth()}.${date.getFullYear()}`

const addCol = document.querySelector('.add-col')
const addRow = document.querySelector('.add-row')
const tbody = document.querySelector('tbody') 
const trHtml = document.querySelector('tr')
let rows = document.querySelectorAll('tr')
const trChildren = trHtml.children.length

addRow.addEventListener('click',()=>{
    let row = document.createElement("tr")
    tbody.appendChild(row)
    for(let i = 0; i< trChildren; i++){
        let td = document.createElement('td')
        td.innerText = 'td'
        row.appendChild(td)
    }
    let n = localStorage.getItem('counterrows');
    if (n === null) {
        n = rows.length + 1 ;
    } else {
        n++;
    }
    console.log(n);
    localStorage.setItem("counterrows", n);
})
const clearRow = document.querySelector('.clear-row')
clearRow.addEventListener('click',()=>localStorage.clear())
const clearColumn = document.querySelector('.clear-columns')
clearColumn.addEventListener('click',()=>localStorage.clear())

// localStorage.setItem('cols', trChildren)
// console.log(JSON.parse(localStorage.getItem('cols')) + 1);
addCol.addEventListener('click',()=>{
    rows.forEach((e)=>{
        let td = document.createElement('td')
        td.innerText = 'td'
        e.appendChild(td)
    })  
})