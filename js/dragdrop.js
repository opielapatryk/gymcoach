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