
    const rulesImg = document.querySelector(".rulesImg"),
        hands = document.querySelectorAll(".hands"),
        handsBonus = document.querySelectorAll(".hands-bonus"),
        home = document.getElementById("home"),
        game = document.getElementById("game"),
        handPlayer = document.getElementById("player-hand"),
        handGame = document.querySelector(".game-hand"),
        score = document.getElementById("score"),
        playAgain = document.querySelector(".play-again"),
        countdown = document.querySelector(".countdown"),
        touchscrren = document.querySelector(".touch"),
        pagGame = document.querySelector("#pag-game"),
        imgRules = document.querySelector("#img-rules"),
        screenButtonGame = document.querySelector(".screenButtonGame"),
        player2Game = document.getElementById("modeGame");
    let count = 3,
        record=0,
        elementalreadyMoved = false,
        mode2player = false;

    // FUNCION DE SCROLL LATERAL
    function swipeArea(){
        let startTouch = 0,
        touchloq = 0;
        
        home.addEventListener("touchstart",(e)=>{
            startTouch = e.changedTouches[0].screenX;
        },false);

        
        home.addEventListener("touchmove", (e)=>{
            
            touchloq = e.changedTouches[0].screenX;
            let positiontouch = startTouch - touchloq;

            if(window.innerWidth <= 450 ){
                
                if(positiontouch > 0 && positiontouch < 100 && elementalreadyMoved == false){
                    console.log(positiontouch)
                
                    if(positiontouch >= 50 ){
                    home.style.cssText = `left:-100%;
                    transition:1s all;`;
                    elementalreadyMoved = true;
                    pagGame.innerHTML = "&larr; SIMPLES GAME"
                    imgRules.src = "images/image-rules-bonus.svg"
                    };

                    if(positiontouch < 50 ){
                        home.style.cssText = `left:0%;
                    transition:1s all;`;
                    };
                    
                    if(window.innerWidth >= 450) document.querySelector(".simpleGame").style.display = "none";
                };


                if(positiontouch < 0 && positiontouch > -100 && elementalreadyMoved == true){
        
                    if(positiontouch <= -50 ){
                        home.style.cssText = `left:0%;
                        transition:1s all;`;
                        elementalreadyMoved = false;
                        pagGame.innerHTML = "BONUS GAME &rarr;";
                        imgRules.src = "images/image-rules.svg"
                    };

                    if(positiontouch > -50){
                        home.style.cssText = `left:-100%;
                        transition: 1s all;`
                    };

                    if(window.innerWidth >= 450) document.querySelector(".bonusGame").style.display = "none";
                    
                };
            };
        },false);
    };

    swipeArea();

    // FUNCION STYLE DE HAND ALEATORIA
    function playerSelectStyle(player,nu){
        switch(nu){
            case 0:
                player.style.cssText = `
                    background-color: hsl(230, 89%, 62%);
                    box-shadow: inset 0px -10px 5px rgba(0, 0, 0, 0.342);`
                player.innerHTML = `
                    <div class="hand-inside">
                        <img src="images/icon-paper.svg" alt="hand paper">
                    </div>
                `
            break;
            case 1:
                player.style.cssText = `
                    background-color:hsl(39, 89%, 49%);
                   box-shadow: inset 0px -10px 5px rgba(0, 0, 0, 0.342);`
                player.innerHTML = `
                    <div class="hand-inside">
                        <img src="images/icon-scissors.svg" alt="hand paper">
                    </div>`
            break;
            case 2:
                player.style.cssText = `
                    background-color:hsl(349, 71%, 52%);
                    box-shadow: inset 0px -10px 5px rgba(0, 0, 0, 0.342);`
                player.innerHTML = `
                    <div class="hand-inside">
                        <img src="images/icon-rock.svg" alt="hand paper">
                    </div>`
            break;
            case 3:
                player.style.cssText = `
                background-color:hsl(189, 59%, 53%);
                box-shadow: inset 0px -10px 5px rgba(0, 0, 0, 0.342);`
                player.innerHTML = `
                <div class="hand-inside">
                    <img src="images/icon-spock.svg" alt="hand spock">
                </div>`
            break;
            case 4:
                player.style.cssText = `
                background-color: hsl(261, 73%, 60%) ;
                box-shadow: inset 0px -10px 5px rgba(0, 0, 0, 0.342);`
                 player.innerHTML = `
                <div class="hand-inside">
                    <img src="images/icon-lizard.svg" alt="hand lizard">
                </div>`
            break;
        }
    };

    function handsSelect(e){
        if(e.target.matches(".paper") || e.target.matches(".paper *")){
            return 0;
        }else if(e.target.matches(".scissors")||e.target.matches(".scissors *")){
           return 1;
        }else if(e.target.matches(".rock *") || e.target.matches(".rock")){
            return 2;
        }else if(e.target.matches(".spock") || e.target.matches(".spock *")){
            return 3;
        }else if(e.target.matches(".lizard") || e.target.matches(".lizard *")){
            return  4;
        };
    };
    function Player2(el){
        document.addEventListener("click",(e)=>{
            console.log(e.target)

            if(e.target.matches("#modeGame")){
                document.querySelector(".choose-yes-no").style.display = "block";
            };

            if(e.target.matches("#noBut")){
                document.querySelector(".choose-yes-no").style.display = "none";
                return;
            }else if(e.target.matches("#yesBut")){
                score.textContent = record = 0;
                if(player2Game.textContent == "1 PLAYER"){
                    player2Game.textContent = "2 PLAYER";
                    mode2player = false;
                  

                }else{
                    player2Game.textContent = "1 PLAYER"
                    document.querySelector(".choose-yes-no").style.display = "none";
                    mode2player = true;
                    let firstHand = true;
                    let hand1,
                        hand2;
                
                    if(firstHand == true){
                        hand1 = handsSelect(el);
                        while( firstHand == true){
                            document.querySelector("#hands-Yes-no").addEventListener("click",(e)=>{
                                if(e.target.matches("#yesButHand")) firstHand =false;
                                if(e.target.matches("noButHand")) firstHand = true;
                                document.querySelector("#hands-Yes-no").style.display = "none";
                            });
                        }
                    }

                }
                
            };

        });
    };
    Player2();

    // FUNCION DE LOGICA DE JOGO
    function gameResult(plaNum,gamNum){
        let msgResult = document.getElementById("msgRe");

        if(plaNum == gamNum){
            msgResult.textContent = "YOU TIED";
            record = record + 0.5;
        }else if( //loserd
        (plaNum === 0 && gamNum === 1) || (plaNum === 0 && gamNum === 4) ||// Paper
        (plaNum === 1 && gamNum === 2) || (plaNum === 1 && gamNum === 3) || // Scissors
        (plaNum === 2 && gamNum === 0) || (plaNum === 2 && gamNum === 3) ||// Rock
        (plaNum === 3 && gamNum === 0) || (plaNum === 3 && gamNum === 4) || // spock
        (plaNum === 4 && gamNum === 2) || (plaNum === 4 && gamNum === 1)){ // lizard
            msgResult.textContent = "YOU LOSE";
            record = 0;
        }else if(
        (plaNum === 0 && gamNum === 2) || (plaNum === 0 && gamNum === 3) ||//Paper
        (plaNum === 1 && gamNum === 0) || (plaNum === 1 && gamNum === 4) ||//Scissors
        (plaNum === 2 && gamNum === 1) || (plaNum === 2 && gamNum === 4) ||//Rock
        (plaNum === 3 && gamNum === 1) || (plaNum === 3 && gamNum === 2) ||//spock
        (plaNum === 4 && gamNum === 3) || (plaNum === 4 && gamNum === 0)){ // lizard
            msgResult.textContent = "YOU WIN!";
            record = record + 1;
        };
        score.textContent = record;
    };

 
    // 1 Player
    function setcountDown(e,play1,play2){
        home.style.display = "none";
        countdown.style.display = "block";
        
        let stopTime = setInterval(()=>{
        let handGameNumber;

            if(count == 1){ 
                count = 4;
                // let hand1Player = hands(e);

                clearInterval(stopTime);
        
                elementalreadyMoved == false ? handGameNumber = Math.trunc(Math.random()*3):handGameNumber = Math.trunc(Math.random()*5);
    
                playerSelectStyle(handGame, handGameNumber);
                
                playerSelectStyle(handPlayer,handsSelect(e));
                gameResult(handsSelect(e),handGameNumber);

                countdown.style.display = "none";
                screenButtonGame.style.display = "none";
                game.style.display = "flex";  
            };
            countdown.innerHTML = `<h1>${--count}</h1>`;
        },1000);
    };

    // Event clic player

    hands.forEach(el => {
        el.addEventListener("click",(el)=>{

            !mode2player?setcountDown(el):Player2(el);
            
        });
    });
    handsBonus.forEach(el =>{
        el.addEventListener("click",(el)=>{
            !mode2player?setcountDown(el):Player2(el);
        });
    });
    playAgain.addEventListener("click",(e)=>{
        home.style.display = "block";
        game.style.display = "none";
        screenButtonGame.style.display = "block";

    });
    document.getElementById("rules").addEventListener("click",(e)=> rulesImg.style.cssText=`
        visibility:visible;
        width: 90%;
        height: 90%;
        top: 5%;
        `);
    document.getElementById("rules-close").addEventListener("click",(e)=>{rulesImg.style.cssText=`
        visibility:hidden;
        width: 0%;
        height: 0%;
        top: -100%;
    `});


