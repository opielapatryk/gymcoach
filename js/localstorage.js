const main = document.querySelector('main')

//SAVE TABLE IN LOCAL STORAGE
setInterval(() => {
    localStorage.setItem('table', main.innerHTML)
}, 1000);

//GET TABLE FROM LOCAL STORAGE
let saved = localStorage.getItem('table');
if (saved) {
	main.innerHTML = saved;
}