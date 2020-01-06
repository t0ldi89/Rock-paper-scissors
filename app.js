var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors')
var result = document.querySelector('.result')
var npcChoice = 0;


 function random() {
     npcChoice = Math.floor(Math.random() *(3-1 + 1 )) + 1;
    console.log(npcChoice)
    return npcChoice
}
   

rock.addEventListener( 'click', function() {
    random();
    result.style.display = 'block'

    var rockChoose = 1;

    var choiceRock = rock.cloneNode(true)
    var youChoice = document.querySelector('.yourChoice')
    var cpuChoice = document.querySelector('.cpuChoice')

    choiceRock.setAttribute('class', 'far fa-hand-rock rockResult')
    youChoice.appendChild(choiceRock)
    var newP = document.createElement('p')
    newP.textContent = "Your choice"
    youChoice.appendChild(newP)


    var choicePaper = paper.cloneNode(true)
    choicePaper.setAttribute('class', 'far fa-hand-paper paperResult')
    var choiceScissors = scissors.cloneNode(true)
    choiceScissors.setAttribute('class', 'far fa-hand-paper scissorsResult')


    if(npcChoice === rockChoose){
        var drawSign = document.querySelector('.resultSign')
        newSignP = document.createElement('p')
        newSignP.textContent = ('=')
        drawSign.appendChild(newSignP)

       cpuChoiceRock = choiceRock.cloneNode(true)
       var newP = document.createElement('p')
        newP.textContent = "Cpu choice"
       cpuChoice.appendChild(cpuChoiceRock)
       cpuChoice.appendChild(newP)

       var score = document.querySelector('.score')
       score.textContent = ('DRAW')
    
    }else if(npcChoice === 2){
        var loseSign = document.querySelector('.resultSign')
        newSignP = document.createElement('p')
        newSignP.textContent = ('>')
        newSignP.style.color = 'red'
        loseSign.appendChild(newSignP)

       cpuChoicePaper = choicePaper.cloneNode(true)
       var newP = document.createElement('p')
        newP.textContent = "Cpu choice"
       cpuChoice.appendChild(cpuChoicePaper)
       cpuChoice.appendChild(newP)

       var score = document.querySelector('.score')
       score.textContent = ('YOU LOSE')
    }
    else if (npcChoice === 3){
        var winSign = document.querySelector('.resultSign')
        newSignP = document.createElement('p')
        newSignP.textContent = ('<')
        winSign.appendChild(newSignP)

       cpuChoiceScissors = choiceScissors.cloneNode(true)
       var newP = document.createElement('p')
        newP.textContent = "Cpu choice"
       cpuChoice.appendChild(cpuChoiceScissors)
       cpuChoice.appendChild(newP)

       var score = document.querySelector('.score')
       score.textContent = ('YOU WIN')
       score.style.color ='red'
    }
})

paper.addEventListener('click', e => {
    console.log('Papier')
})

scissors.addEventListener('click', e =>{
    console.log('Nożyczki')
})











