var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors')
var result = document.querySelector('.result')
var npcChoice = 0;
var playerPoints = 0;
var cpuPoints = 0;




 function random() {
     npcChoice = Math.floor(Math.random() *(3-1 + 1 )) + 1;
    return npcChoice
}
function cpuRock(){
    var choiceRock = rock.cloneNode(true)
    choiceRock.setAttribute('class', 'far fa-hand-rock rockResult')
    var cpuChoice = document.querySelector('.cpuChoice')
    cpuChoiceRock = choiceRock.cloneNode(true)
    var newP = document.createElement('p')
    newP.textContent = "Cpu choice"
   cpuChoice.appendChild(cpuChoiceRock)
   cpuChoice.appendChild(newP)
}
function cpuPaper(){
    var cpuChoice = document.querySelector('.cpuChoice')
    var choicePaper = paper.cloneNode(true)
    choicePaper.setAttribute('class', 'far fa-hand-paper paperResult')
    cpuChoicePaper = choicePaper.cloneNode(true)

    var newP = document.createElement('p')
     newP.textContent = "Cpu choice"
    cpuChoice.appendChild(cpuChoicePaper)
    cpuChoice.appendChild(newP)
}
function cpuScissors(){
    var cpuChoice = document.querySelector('.cpuChoice')
    var choiceScissors = scissors.cloneNode(true)
    choiceScissors.setAttribute('class', 'far fa-hand-scissors scissorsResult')
    cpuChoiceScissors = choiceScissors.cloneNode(true)
    var newP = document.createElement('p')
     newP.textContent = "Cpu choice"
    cpuChoice.appendChild(cpuChoiceScissors)
    cpuChoice.appendChild(newP)
}

function win(){
    var winSign = document.querySelector('.resultSign')
    newSignP = document.createElement('p')
    playerPoints ++
    newSignP.textContent = ('<')
    winSign.appendChild(newSignP)
    var score = document.querySelector('.score')
       score.textContent = ('YOU WIN')
       score.style.color ='red'
       var cpuTotalScore = document.querySelector('.cpuAllScore')
       var playerTotalScore = document.querySelector('.playerAllScore')
    playerTotalScore.textContent = playerPoints
    cpuTotalScore.textContent = cpuPoints
}
function draw(){
    var drawSign = document.querySelector('.resultSign')
    newSignP = document.createElement('p')
    newSignP.textContent = ('=')
    drawSign.appendChild(newSignP)
    var score = document.querySelector('.score')
    score.textContent = ('DRAW')
}
function lose(){
    var loseSign = document.querySelector('.resultSign')
    newSignP = document.createElement('p')
    newSignP.textContent = ('>')
    newSignP.style.color = 'red'
    loseSign.appendChild(newSignP)
    var score = document.querySelector('.score')
    score.textContent = ('YOU LOSE')
    cpuPoints ++
    var cpuTotalScore = document.querySelector('.cpuAllScore')
    var playerTotalScore = document.querySelector('.playerAllScore')
    cpuTotalScore.textContent = cpuPoints
    playerTotalScore.textContent = playerPoints
}
function addPlayerPoints(){
    var playerRoundScore = 1
    var cpuRoundScore = 0
var playerScoreList = document.querySelector('.playerScoreList')
var newPointsLi = document.createElement('li')
newPointsLi.textContent = playerRoundScore
playerScoreList.appendChild(newPointsLi)

var cpuScoreList = document.querySelector('.cpuScoreList')
var newCpuPoint = document.createElement('li')
newCpuPoint.textContent = cpuRoundScore
cpuScoreList.appendChild(newCpuPoint)
}

function addCpuPoints(){
    var cpuRoundScore = 1
    var playerRoundScore = 0;
    var playerScoreList = document.querySelector('.playerScoreList')
    var newPointsLi = document.createElement('li')
    newPointsLi.textContent = playerRoundScore
    playerScoreList.appendChild(newPointsLi)
    
    var cpuScoreList = document.querySelector('.cpuScoreList')
    var newCpuPoint = document.createElement('li')
    newCpuPoint.textContent = cpuRoundScore
    cpuScoreList.appendChild(newCpuPoint)
}


rock.addEventListener( 'click', function() {
    random();
    result.style.display = 'block'

    var rockChoose = 1;

    var choiceRock = rock.cloneNode(true)
    var youChoice = document.querySelector('.yourChoice')
 
    choiceRock.setAttribute('class', 'far fa-hand-rock rockResult')
    youChoice.appendChild(choiceRock)
    var newP = document.createElement('p')
    newP.textContent = "Your choice"
    youChoice.appendChild(newP)
  

    if(npcChoice === rockChoose){
        draw();
        cpuRock();   
    }else if(npcChoice === 2){
        lose()
        cpuPaper()
        addCpuPoints()
    }
    else if (npcChoice === 3){
        win()
        cpuScissors()
        addPlayerPoints()
    }
})

paper.addEventListener('click',function() {
    random();
    result.style.display = 'block'

    var choicePaper = paper.cloneNode(true)
    var youChoice = document.querySelector('.yourChoice')
    var cpuChoice = document.querySelector('.cpuChoice')

    choicePaper.setAttribute('class', 'far fa-hand-paper paperResult')
    youChoice.appendChild(choicePaper)
    var newP = document.createElement('p')
    newP.textContent = "Your choice"
    youChoice.appendChild(newP)

    var paperChoice = 2;

    if(npcChoice === paperChoice){
        draw()
        cpuPaper()
    }else if(npcChoice === 3){
        lose()
        cpuScissors()
        addCpuPoints()
    }
    else if (npcChoice === 1){
        win()
        cpuRock()
        addPlayerPoints()
    }
})
scissors.addEventListener('click', function(){
    random();
    result.style.display = 'block'

    var choiceScissors = scissors.cloneNode(true)
    var youChoice = document.querySelector('.yourChoice')

    choiceScissors.setAttribute('class', 'far fa-hand-scissors scissorsResult')
    youChoice.appendChild(choiceScissors)
    var newP = document.createElement('p')
    newP.textContent = "Your choice"
    youChoice.appendChild(newP)

    var scissorsChoice = 3;

    if(npcChoice === scissorsChoice){
        draw()
        cpuScissors()
    }else if(npcChoice === 1){
        lose()
        cpuRock()
        addCpuPoints()
    }
    else if (npcChoice === 2){
        win()
        cpuPaper()
        addPlayerPoints()
    }
})

var nextRound = document.querySelector('.nextRound')

nextRound.addEventListener('click', function(){
    if(playerPoints === 5 || cpuPoints === 5){
        var youChoice = document.querySelector('.yourChoice i')
        var youChoiceP  = document.querySelector('.yourChoice p')
        var resultSign = document.querySelector('.resultSign p')
        var cpuChoice = document.querySelector('.cpuChoice i')
        var cpuChoiceP = document.querySelector('.cpuChoice p')
        youChoice.remove()
        youChoiceP.remove()
        cpuChoice.remove()
        cpuChoiceP.remove()
        resultSign.remove()

        if(playerPoints > cpuPoints){
            var score = document.querySelector('.score')
            score.textContent = ('YOU WIN')
            score.style.color ='red'
        }
        
        nextRound.innerText = 'New Game'
        nextRound.style.color = 'white'

        nextRound.addEventListener('click', function(){
            var deletePLayerScore = document.querySelectorAll('.playerScoreList li')
            deletePLayerScore.parentElement.removeChild(deletePLayerScore)
            var deleteCpuScore = document.querySelector('.cpuScoreList li')
            deleteCpuScore.removeChild('li');
            playerPoints = 0;
            cpuPoints = 0;
            result.style.display = 'none'
        })
    }else{
        result.style.display = 'none'
        var youChoice = document.querySelector('.yourChoice i')
        var youChoiceP  = document.querySelector('.yourChoice p')
        var resultSign = document.querySelector('.resultSign p')
        var cpuChoice = document.querySelector('.cpuChoice i')
        var cpuChoiceP = document.querySelector('.cpuChoice p')
        youChoice.remove()
        youChoiceP.remove()
        resultSign.remove()
        cpuChoice.remove()
        cpuChoiceP.remove()
    }
  
})











