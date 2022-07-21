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
import generateTable from './js/generate-table.js'
//https://javascript.plainenglish.io/deploying-a-localhost-server-with-node-js-and-express-js-58775f098407


//DELETE TABLE
const deleteTable = document.querySelector(".delete-table")
deleteTable.addEventListener('click',()=>{
    main.innerHTML = ''
})

//SAVE TABLE IN LOCAL STORAGE
setInterval(() => {
    localStorage.setItem('table', main.innerHTML)
}, 1000);

//GET TABLE FROM LOCAL STORAGE
let saved = localStorage.getItem('table');
if (saved) {
	main.innerHTML = saved;
}

//EXPORT TABLE TO PDF
document.querySelector(".export-table").addEventListener('click',genPDF)
function genPDF() {
        const doc = new jsPDF('l')
        doc.fromHTML(main,{'width':1500})
        doc.save('Test.pdf')
    }
    //******* FIX: UGLY STYLES OF PDF *******//

//******* CUSTOM CONTEXT MENU *******//
    //******* OPTION FOR CHANGING BACKGROUND COLOR *******//
    //******* OPTION FOR CHANGING TEXT COLOR *******//
    //******* OPTION TO ADD EXCERCISE FROM LIST *******//


//******* MOVING ON TABLE USING KEYS *******//
    //******* MAKE CELL ACTIVE WHILE USING KEYS OR LMB *******//

let rowindex = 0
let cellindex = 0
let rowlength = 0
let celllength = 0
document.querySelectorAll('tr').forEach((e)=>{
    e.addEventListener('click',()=>{
        rowindex = e.rowIndex //set index of row
    })
})
document.querySelectorAll('td').forEach((e)=>{
    e.addEventListener('click',()=>{
        cellindex = e.cellIndex //set index of cell in row
    })
})
rowwws = document.querySelectorAll('tr')
document.addEventListener('keydown',(event)=>{
    rowlength = document.querySelectorAll('tr').length - 1
    rowwws.forEach((e) => celllength = e.children.length - 1)
    switch (event.key) {
        case "ArrowLeft":
            rowwws.forEach((e)=>{
                for(let i = 0;i<e.children.length;i++){
                    e.children[i].style.border = `1px solid black`
                }
            })
            // Left pressed
            if(cellindex > 0){
                cellindex--
            } else {
                cellindex = celllength
            }
            break;
        case "ArrowRight":
            rowwws.forEach((e)=>{
                for(let i = 0;i<e.children.length;i++){
                    e.children[i].style.border = `1px solid black`
                }
            })
            if(cellindex < celllength){
                cellindex++
            } else {
                cellindex = 0
            }
            break;
            // Right pressed
        case "ArrowUp":
            rowwws.forEach((e)=>{
                for(let i = 0;i<e.children.length;i++){
                    e.children[i].style.border = `1px solid black`
                }
            })
            if(rowindex > 0){
                rowindex--
            } else {
                rowindex = rowlength
            }
            break;
            // Up pressed
        case "ArrowDown":
            rowwws.forEach((e)=>{
                for(let i = 0;i<e.children.length;i++){
                    e.children[i].style.border = `1px solid black`
                }
            })
            if(rowindex < rowlength){
                rowindex++
            } else {
                rowindex = 0
            }
            break;
    }
    rowwws[rowindex].children[cellindex].style.border = `2px solid black` //select cell
    rowwws[rowindex].children[cellindex].focus()
})
//DRAG & DROP EXCERCISE FROM MENU TO CELL
    const td = document.querySelectorAll('td')
    const li = document.querySelectorAll('li')
    li.forEach(item =>{
        item.addEventListener('dragstart',()=>{
            item.classList.add('draging')
            item.classList.add('afterdrag')
        })
        item.addEventListener('dragend',()=>{
            item.classList.remove('draging')
            item.classList.remove('move')
        })
    })

    td.forEach(cell =>{
        cell.addEventListener('dragover',e =>{
            e.preventDefault()
            const dragable = document.querySelector('.draging')
            if(cell.contains(dragable)){
                cell.replaceChild(dragable,dragable)
            } else{
                cell.appendChild(dragable)
            }
            
        })
    })
//******* FIX STYLES ON copy&paste exc from menu  *******// 