//EXPORT TABLE TO PDF
document.querySelector(".export-table").addEventListener('click',genPDF)
function genPDF() {
        const doc = new jsPDF('l')
        doc.fromHTML(main,{'width':1000})
        doc.save('Test.pdf')
    }
    //******* FIX: UGLY STYLES OF PDF *******//