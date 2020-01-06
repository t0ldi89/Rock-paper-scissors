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

    var choicePaper = paper.cloneNode(true)
    choicePaper.setAttribute('class', 'far fa-hand-paper paperResult')
    var choiceScissors = scissors.cloneNode(true)

    if(npcChoice === rockChoose){
       cpuChoiceRock = choiceRock.cloneNode(true)
       cpuChoice.appendChild(cpuChoiceRock)
       
       
    }
    // }else if(npcChoice === 2){
    //     alert('Przegrałeś :(')
    // }else if (npcChoice === 3){
    //     alert('Wygrałeś')
    // }

})

paper.addEventListener('click', e => {
    console.log('Papier')
})

scissors.addEventListener('click', e =>{
    console.log('Nożyczki')
})











