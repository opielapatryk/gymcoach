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
            tr.appendChild(td)
            td.innerHTML = '<input type="text" class="td-input">'
        }
        tbody.appendChild(tr)
    }   
    if(main.childElementCount === 0){
        return main.appendChild(table) 
    } else {
        main.innerHTML = ''
        return main.appendChild(table)
    }
}

//******* DELETE TABLE *******//
const deleteTable = document.querySelector(".delete-table")
deleteTable.addEventListener('click',()=>main.innerHTML = '')

//******* EXPORT TABLE TO PDF *******//

//******* SAVE TABLE IN LOCAL STORAGE *******//

//******* MOVING ON TABLE USING KEYS *******//

//******* USE RMB TO OPEN OPTION TABLE *******//

//******* FIX BOTTOM BORDER ON TABLE *******//

//******* CREATE SMALL BUTTON FOR ADDING ONE ADDITIONAL ROW AND ONE FOR COL *******//

//******* CREATE SMALL BUTTON FOR DELETE ONE ROW AND ONE FOR DELTE ONE COL *******//

