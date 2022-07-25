const generateRows = document.querySelector('.generate-rows')
const generateCols = document.querySelector('.generate-cols')

function generateTable(rowsQty, colsQty){
    const table = document.createElement('table')
    const tbody = document.createElement('tbody')
    table.appendChild(tbody)
    for(let i = 0; i < rowsQty; i++){
        const tr = document.createElement('tr')
        for(let j = 0; j < colsQty; j++){
            const td = document.createElement('td')
            tr.appendChild(td)
            td.setAttribute('contenteditable','true')//EDIT TABLE CELL
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

document.querySelector('.generate-submit').addEventListener("click",()=>{
    if(parseInt(generateRows.value) > 0 && parseInt(generateCols.value) > 0){
        generateTable(parseInt(generateRows.value),parseInt(generateCols.value))
    }
    setTimeout(() => {
        window.location.reload()
    }, 1000);
})

