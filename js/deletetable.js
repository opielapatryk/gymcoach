const main = document.querySelector('main')
//DELETE TABLE
const deleteTable = document.querySelector(".delete-table")
deleteTable.addEventListener('click',()=>{
    main.innerHTML = ''
})