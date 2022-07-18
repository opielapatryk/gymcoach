//******* NAVIGATION MENU *******//
const h1 = document.querySelectorAll('.h1')
h1.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.nextSibling.nextSibling.style.display !== 'block' ? e.nextSibling.nextSibling.style.display = 'block' : e.nextSibling.nextSibling.style.display = 'none'
    })
})
//******* GENERATE TABLE *******//
//consts
const main = document.querySelector('main')
const generateRows = document.querySelector('.generate-rows')
const generateCols = document.querySelector('.generate-cols')
const generateSubmit = document.querySelector('.generate-submit').addEventListener("click",()=>{
    if(parseInt(generateRows.value) > 0 && parseInt(generateCols.value) > 0){
        generateTable(parseInt(generateRows.value),parseInt(generateCols.value))
    }
})

//generate table function
const generateTable = function(rowsQty, colsQty){
    const table = document.createElement('table')
    const tbody = document.createElement('tbody')
    table.appendChild(tbody)
    for(let i = 0; i < rowsQty; i++){
        const tr = document.createElement('tr')
        for(let j = 0; j < colsQty; j++){
            const td = document.createElement('td')
            td.addEventListener("click",()=>editCell(td))  //edit cell function
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }   
    if(main.childElementCount === 0){
        return main.appendChild(table) 
    } else {
        return null
    }
}

//******* DELETE TABLE *******//
const deleteTable = document.querySelector(".delete-table")
deleteTable.addEventListener('click',()=>main.innerHTML = '')

//******* EDIT CELL FUNCTION*******//
const editCell = function(td){
    td.innerHTML = 'write some txt'
}

