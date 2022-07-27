//MOVING ON TABLE USING KEYS
if(main.childElementCount === 1){
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
    const rowwws = document.querySelectorAll('tr')
    main.addEventListener('keydown',(event)=>{
        rowlength = document.querySelectorAll('tr').length - 1
        rowwws.forEach((e) => celllength = e.children.length - 1)
        switch (event.key) {
            case "ArrowLeft":
                rowwws.forEach((e)=>{
                    for(let i = 0;i<e.children.length;i++){
                        e.children[i].classList.remove('border')
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
                        e.children[i].classList.remove('border')
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
                        e.children[i].classList.remove('border')
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
                        e.children[i].classList.remove('border')
                    }
                })
                if(rowindex < rowlength){
                    rowindex++
                } else {
                    rowindex = 0
                }
                break;
        }
        rowwws[rowindex].children[cellindex].classList.add('border') //select cell
        rowwws[rowindex].children[cellindex].focus()
        focusedcell = rowwws[rowindex].children[cellindex]
    })
}
main.addEventListener('click',(e)=>{
    td.forEach((e)=>{
        e.classList.remove('border')
    })
    if(e.target === td){
        e.target.classList.add('border')
            focusedcell = e.target
    }
    
})
let focusedcell