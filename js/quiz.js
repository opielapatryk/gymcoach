const question = document.querySelector('.question')
const answers = document.querySelector('.answers')

const questions = [
    'What is your goal? Building muscles or strength',
    'Choose when you can working out',
    'How much you bench press? (one max rep)',
    'How much you squat? (one max rep)',
    'How much you deadlift? (one max rep)',
    'How many pull ups can you make?'
]

question.innerHTML = questions[0]
let counter = 0 
answers.addEventListener('click',()=>{
    counter += 1
    if(counter <= 5){
        question.innerHTML = questions[counter]
        answers.innerHTML = answersList[counter].join(' ')
    } else{
        question.innerHTML = 'You have completed test!'
        answers.innerHTML = 'Click there to generate your wourkout routine!! <button>Click</button>'
    }
})

const answersList = 
    [
        ['<button>Building muscles</button>', '<button>Building strength</button>'],
        ['<button>Monday</button>','<button>Tuesday</button>','<button>Wednesday</button>','<button>Thursday</button>','<button>Friday</button>','<button>Saturday</button>','<button>Sunday</button>'],
        ['<button>Less than 40kg</button>', '<button>Less than 60kg</button>', '<button>Less than 80kg</button>', '<button>Less than 100kg</button>'],
        ['<button>Less than 40kg</button>', '<button>Less than 60kg</button>', '<button>Less than 80kg</button>', '<button>Less than 100kg</button>'],
        ['<button>Less than 60kg</button>', '<button>Less than 80kg</button>', '<button>Less than 100kg</button>', '<button>Less than 120kg</button>'],
        ['<button>Less than 2</button>', '<button>Less than 5</button>', '<button>Less than 9</button>', '<button>Less than 12</button>']
    ]

answers.innerHTML = answersList[0].join(' ')