const quizLink = document.querySelector('.quiz-link')
quizLink.addEventListener('click',()=>{
    quizLink.style.width = '30vh'
    quizLink.style.transition = 'width 1s, opacity 2s, padding 1s'
    quizLink.style.opacity = '1'
    quizLink.children[0].style.display = 'none'
    quizLink.children[1].style.display = 'block'
    quizLink.style.padding = '1em'
})

document.addEventListener('click',()=>{
    quizLink.style.width = '1em'
    quizLink.style.opacity = '.3'
    quizLink.children[0].style.display = 'block'
    quizLink.children[1].style.display = 'none'
    quizLink.style.padding = '0'
},true)