let score = document.getElementById('score');
let do1 = document.getElementById('do1');
let do2 = document.getElementById('do2');
let defaultScore = 0;
score.innerText = defaultScore;

function getvalue(){
    if(score !== 0){
     score.innerHTML ++;
    }else{
        score = defaultScore;
    }
}
do1.addEventListener('click',()=>{
    getvalue()
})
// resetScore
function resetScore(){
do2.addEventListener('click',()=>{
    score.innerHTML = 0;
})
}
resetScore()
