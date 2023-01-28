const correctAnswers = ['C', 'D', 'A', 'C', 'D', 'B', 'C', 'C', 'D', 'D'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
let mySound = new Audio('scoreSound.mp3');



form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value] ;

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 10; 
        }



    });
    //show result on page
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`
        if(output === score){
            clearInterval(timer);
        } else {
            mySound.play();
            
            output++;
            
        }
    }, 100);
    
});



//window object (globaj object)

// window.console.log('hello')

// document.querySelector('form')

// setTimeout(() =>{
// alert('hello,ninjas')
// }, 3000);

// setInterval(() => {
//     console.log('hello');
// }, 2000);
