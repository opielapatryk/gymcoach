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
    question.innerHTML = questions[counter]
})

const Answers = {
    answerNo0: {
        id:0,
        options: ['Building muscles', 'Building strength']
    },
    answerNo1: {
        id:1,
        options: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    },
    answerNo2: {
        id:2,
        options: ['Less than 40kg', 'Less than 60kg', 'Less than 80kg', 'Less than 100kg']
    },
    answerNo3: {
        id:3,
        options: ['Less than 40kg', 'Less than 60kg', 'Less than 80kg', 'Less than 100kg']
    },
    answerNo4: {
        id:4,
        options: ['Less than 60kg', 'Less than 80kg', 'Less than 100kg', 'Less than 120kg']
    },
    answerNo5: {
        id:5,
        options: ['Less than 2', 'Less than 5', 'Less than 9', 'Less than 12']
    }
}

