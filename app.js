//Welcome message
alert("Welcome to Twenty")

//Loop and Round Variables
var play = 0
var round = 1;

//User and Matt Win count set
var userwins = 0
var mattwins = 0

//Game Master Loop
do {

    //User and Matt Number Values
    var mattnum = 0
    var usernum = 0

    //Matt Phase Start
    alert("You face Matt 3000. Matt gets first draw.")

    //Matt Number Generation Loop
    do { 
        var numbergen = Math.floor(Math.random() * 10) + 1;
        mattnum = Math.floor(mattnum + numbergen)
        alert(`Matt has drawn ${numbergen}
    Matt's new total is ${mattnum}.`)
    } while (mattnum < 16)

    //Player Phase Loop if Matt is under 20
    if  (mattnum < 21) {

        //Matt Phase End Message
        alert(`Matt stopped and his final number was ${mattnum}. 
        
It is now your turn to draw.`)

        //Player Phase Start
        var numbergen = Math.floor(Math.random() * 10) + 1;
        usernum = Math.floor(usernum + numbergen)

        //Player Starting Number Message
        if (mattnum < 20) {
        alert(`Your starting number is ${usernum}. 
        
Your goal is higher than ${mattnum} and without going over 20, good luck!`)
        } else if (mattnum == 20) {
            alert(`Your starting number is ${usernum}. 

Matt scored a perfect 20. Your best option is to force a tie with another 20, good luck!`)
        }
        
        //Player Prompt for Additional Number
        var userrequest = confirm(`Your current total is ${usernum}.
    Draw another number?`)

        do {
        
        //Legal Number Check
        if (usernum < 21) {
                
            //Player Number Generation Loop
            do {
                    var numbergen = Math.floor(Math.random() * 10) + 1;
                    usernum = Math.floor(usernum + numbergen)
                    alert(`You rolled a ${numbergen} 
    Your new total is ${usernum}.`)

                    //Legal Number Check
                    if (usernum < 21) {
                        userrequest = confirm(`Your current total is ${usernum}.
    Draw another number?`)
                    } else if (usernum > 20) {
                        break;
                    }

            } while (userrequest == true)

            //Loss Check
            if (usernum > 20) {
                alert("Oops, you went over 20 and your round is forfeit. Matt Wins!")
                mattwins++
                continue;
            }

            //Ending number message
            alert(`Your final number was ${usernum}.`)

            //Win Check
            if (usernum == mattnum) {
                alert(`Both you and Matt both ended with ${usernum}. Its a tie!`)
            } else if (usernum > mattnum) {
                alert(`You got ${usernum} and Matt got ${mattnum}. Congratulations, You Win!`)
                userwins++
            } else if (mattnum > usernum) {
                alert(`You got ${usernum} and Matt got ${mattnum}. Matt Wins!`)
                mattwins++
            }
        //User Automatic Loss
        } else if (usernum > 20) {
            alert("Oops, you went over 20 and your round is forfeit. Matt Wins!")
            mattwins++
        }

    } while (play = 0)
    
    //Matt Automatic Loss 
    } else if (mattnum > 20) {
        alert("Oops, Matt went over 20 and his round is forfeit. You Win!")
        userwins++
    }

    //Play Again Prompt
    var playagain = confirm(`Round Over. The current score is

    Matt 3000: ${mattwins} wins.          You: ${userwins} wins.
    
Would you like to play again?`)
        if (playagain == false) {
            break;
        //Round Counter for funsies
        }else if (playagain == true) {
            round++
            alert(`Round ${round} start`)
        }
} while (play == 0)

//Game End Message
alert(`Thank you for playing, you played ${round} rounds and your final score was: 

    Matt 3000: ${mattwins}

    You: ${userwins}`);