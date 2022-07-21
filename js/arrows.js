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
    const rowwws = document.querySelectorAll('tr')
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