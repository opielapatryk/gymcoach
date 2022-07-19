//NAVIGATION MENU
const h1 = document.querySelectorAll('.h1')
h1.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.nextSibling.nextSibling.style.display !== 'block' ? e.nextSibling.nextSibling.style.display = 'block' : e.nextSibling.nextSibling.style.display = 'none'
    })
})
//GENERATE TABLE 
//consts
const main = document.querySelector('main')
const generateRows = document.querySelector('.generate-rows')
const generateCols = document.querySelector('.generate-cols')
document.querySelector('.generate-submit').addEventListener("click",()=>{
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
        main.appendChild(table) 
        return localStorage.setItem('table', main.innerHTML) //SAVE TABLE IN LOCAL STORAGE
    } else {
        main.innerHTML = ''
        main.appendChild(table)
        return localStorage.setItem('table', main.innerHTML) //SAVE TABLE IN LOCAL STORAGE
    }
}

//DELETE TABLE
const deleteTable = document.querySelector(".delete-table")
deleteTable.addEventListener('click',()=>{
    main.innerHTML = ''
    localStorage.setItem('table', main.innerHTML)
})

//GET TABLE FROM LOCAL STORAGE
let saved = localStorage.getItem('table');
if (saved) {
	main.innerHTML = saved;
}

//EXPORT TABLE TO PDF
document.querySelector(".export-table").addEventListener('click',genPDF)
function genPDF() {
        const doc = new jsPDF('l')
        doc.fromHTML(main)
        doc.save('Test.pdf')
    }
    //******* FIX: PDF CUTS LAST ROW *******//

//******* MOVING ON TABLE USING KEYS *******//

//******* USE RMB TO OPEN OPTION TABLE *******//
    //******* OPTION FOR CHANGING BACKGROUND COLOR *******//
    //******* OPTION FOR CHANGING TEXT COLOR *******//
    //******* OPTION FOR SPAN COLS *******//
    //******* OPTION FOR SPAN ROWS *******//
    //******* OPTION TO ADD EXCERCISE FROM LIST *******//

//******* FIX BOTTOM BORDER ON TABLE *******//

//******* CREATE SMALL BUTTON FOR ADDING ONE ADDITIONAL ROW AND ONE FOR COL *******//

//******* CREATE SMALL BUTTON FOR DELETE ONE ROW AND ONE FOR DELTE ONE COL *******//
