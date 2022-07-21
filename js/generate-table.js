export const generateTable = function(rowsQty, colsQty){
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
//xd