
    const rulesImg = document.querySelector(".rulesImg"),
        hands = document.querySelectorAll(".hands"),
        handsBonus = document.querySelectorAll(".hands-bonus"),
        home = document.getElementById("home"),
        game = document.getElementById("game"),
        handPlayer = document.getElementById("player-hand"),
        handGame = document.querySelector(".game-hand"),
        scoreSinglePlay2 = document.getElementById("score-single-play2"),
        scorePlay1 = document.getElementById("score-play1"),
        playAgain = document.querySelector(".play-again"),
        countdown = document.querySelector(".countdown"),
        touchscrren = document.querySelector(".touch"),
        pagGame = document.querySelector("#pag-game"),
        imgRules = document.querySelector("#img-rules"),
        screenButtonGame = document.querySelector(".screenButtonGame"),
        player2Game = document.getElementById("modeGame"),
        playerh1 = document.querySelectorAll(".playerh1"),
        headerInfo = document.querySelector(".header-info"),
        handchangeplayer = document.querySelector(".handGameChoose"),
        headerPlay1 = document.getElementById("header-play1"),
        headerPlay2 = document.getElementById("header-play2"),
        pPlay1 = document.getElementById("p-scorePlay1"),
        pPlay2 = document.getElementById("p-scoreSinglePlay2"),
        bonusGame = document.querySelector(".bonusGame"),
        simpleGame = document.querySelector(".simpleGame");
        
    let count = 3,
        recordplay2=0,
        recordplay1 = 0,
        elementalreadyMoved = false,
        mode2player = false,
        stopTime,
        bonus = false;
      

    // Selecion de Modo play 1 o play 2
    document.addEventListener("click",(e)=>{
        if(e.target.matches("#modeGame")){
            document.querySelector("#choose-yes-no").style.display = "block";
        };

        if(e.target.matches("#noBut")){
            document.querySelector("#choose-yes-no").style.display = "none";
            return;
        }else if(e.target.matches("#yesBut")){
            scoreSinglePlay2.textContent = recordplay2 = 0;
            scorePlay1.textContent = recordplay1 = 0;
            document.querySelector("#choose-yes-no").style.display = "none";
            if(mode2player == true){
                player2Game.textContent = "2 PLAYER";
                playerh1.forEach(el => el.style.display = "none");
                mode2player = false;
                headerPlay1.style.display = "none";
                headerInfo.style.textAlign = "left";
                pPlay2.textContent = "score";
            }else{
                player2Game.textContent = "1 PLAYER";
                playerh1.forEach(el => el.style.display = "block");
                mode2player = true;
                headerPlay1.style.display = "block";
                headerInfo.style.textAlign = "Center";
                pPlay1.textContent = "P1";
                pPlay2.textContent = "P2";

            };
        };
    });
   
 

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

            if(window.innerWidth ){
               
                if(positiontouch > 0 && positiontouch < 100 && elementalreadyMoved == false){
                    if(positiontouch >= 50 ){
                        headerInfo.innerHTML = `<p>ROCK</p>
                                                <p>PAPER</p>
                                                <p>SCISSORS</p>
                                                <p>LIZARD</p>
                                                <p>SPOCK</p>`;
                        headerInfo.style.cssText +=`font-size:0.8em;`
                        home.style.cssText += `left:-100%;
                        transition:1s all;`;
                        elementalreadyMoved = true;
                        pagGame.innerHTML = "&larr; SIMPLE GAME"
                        imgRules.src = "images/image-rules-bonus.svg"
                    };

                    if(positiontouch < 50 ){
                        home.style.cssText += `left:0%;
                    transition:1s all;`;
                    };
                    
                    // if(window.innerWidth >= 450) document.querySelector(".simpleGame").style.display = "none";
                };


                if(positiontouch < 0 && positiontouch > -100 && elementalreadyMoved == true){
        
                    if(positiontouch <= -50 ){
                        headerInfo.innerHTML = `<p>ROCK</p>
                                                <p>PAPER</p>
                                                <p>SCISSORS</p>`;
                         headerInfo.style.cssText +=`font-size:1.3em;`
                        home.style.cssText += `left:0%;
                        transition:1s all;`;
                        elementalreadyMoved = false;
                        pagGame.innerHTML = "BONUS GAME &rarr;";
                        imgRules.src = "images/image-rules.svg"
                    };

                    if(positiontouch > -50){
                        home.style.cssText += `left:-100%;
                        transition: 1s all;`
                    };

                    // if(window.innerWidth >= 450) document.querySelector(".bonusGame").style.display = "none";
                    
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
     // Funcion de selecion de hand
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
    
    // FUNCION DE LOGICA DE JOGO
    function gameResult(plaNum,gamNum, mod2){
        let msgResult = document.getElementById("msgRe");

        if(plaNum == gamNum){
            if(mod2){
                msgResult.textContent = "TIE";
                recordplay2 = recordplay2 + 0.5;
                recordplay1 = recordplay1 + 0.5;
            }else{
                msgResult.textContent = "YOU TIED";
            recordplay2 = recordplay2 + 0.5;
            }
        }else if( //loserd
        (plaNum === 0 && gamNum === 1) || (plaNum === 0 && gamNum === 4) ||// Paper
        (plaNum === 1 && gamNum === 2) || (plaNum === 1 && gamNum === 3) || // Scissors
        (plaNum === 2 && gamNum === 0) || (plaNum === 2 && gamNum === 3) ||// Rock
        (plaNum === 3 && gamNum === 0) || (plaNum === 3 && gamNum === 4) || // spock
        (plaNum === 4 && gamNum === 2) || (plaNum === 4 && gamNum === 1)){ // lizard
            if(mod2){
                msgResult.textContent = "P2 WIN!!";
                recordplay2 = recordplay2 + 1;
            }else{
                msgResult.textContent = "YOU LOSE";
                recordplay2 = 0;
            };
        }else if(
        (plaNum === 0 && gamNum === 2) || (plaNum === 0 && gamNum === 3) ||//Paper
        (plaNum === 1 && gamNum === 0) || (plaNum === 1 && gamNum === 4) ||//Scissors
        (plaNum === 2 && gamNum === 1) || (plaNum === 2 && gamNum === 4) ||//Rock
        (plaNum === 3 && gamNum === 1) || (plaNum === 3 && gamNum === 2) ||//spock
        (plaNum === 4 && gamNum === 3) || (plaNum === 4 && gamNum === 0)){ // lizard
            if(mod2){
                msgResult.textContent = "P1 WIN!!";
                recordplay1 = recordplay1 + 1;
            }else{
                msgResult.textContent = "YOU WIN!";
                recordplay2 = recordplay2 + 1;
            };
        };
        scoreSinglePlay2.textContent = recordplay2;
        scorePlay1.textContent = recordplay1;
    };

 
    // Modo 1 Player
    function setcountDown(e){
        home.style.display = "none";
        countdown.style.display = "block";
        pagGame.style.display = "none";
        
           stopTime = setInterval(()=>{
        let handGameNumber;

            if(count == 1){ 
                count = 4;
                // let hand1Player = hands(e);

                clearInterval(stopTime);
        
                elementalreadyMoved == false ? handGameNumber = Math.trunc(Math.random()*3):handGameNumber = Math.trunc(Math.random()*5);
    
                playerSelectStyle(handGame, handGameNumber);
                
                playerSelectStyle(handPlayer,handsSelect(e));
                gameResult(handsSelect(e),handGameNumber,false);

                countdown.style.display = "none";
                screenButtonGame.style.display = "none";
                game.style.display = "flex";  
            };
            countdown.innerHTML = `<h1>${--count}</h1>`;
        },1000);
    };

    // ModO 2 player
    
    let play2 = 0,
    hansCompleted = 0,
    hand1 =[],
    hand2 = null;

    function Player2(el){
        if(play2 <= 1){
            playerh1.forEach(el => el.textContent = "PLAYER 2:")
            play2++;
            hansCompleted++;
            hand1.push(handsSelect(el))
        };
           
        if(hansCompleted == 2){
            pagGame.style.display = "none";
            home.style.display = "none";
            countdown.style.display = "block";
            playerh1.forEach(el =>{ el.textContent = "PLAYER 1:"})
                stopTime = setInterval(()=>{
                    if(count == 1){ 
                        count = 4;
        
                        clearInterval(stopTime);
            
                        playerSelectStyle(handGame,hand1[1]);
                        
                        playerSelectStyle(handPlayer,hand1[0]);
                        gameResult(hand1[0],hand1[1],true);
        
                        countdown.style.display = "none";
                        screenButtonGame.style.display = "none";
                        game.style.display = "flex";
                    };
                    countdown.innerHTML = `<h1>${--count}</h1>`;
                },1000);
        };
    };
    // Event click player

    hands.forEach(el => {
        el.addEventListener("click",(el)=>{
            !mode2player?setcountDown(el):Player2(el);
        },true);
    });
    handsBonus.forEach(el =>{
        el.addEventListener("click",(el)=>{
            !mode2player?setcountDown(el):Player2(el);
        },true);
    });
    playAgain.addEventListener("click",(e)=>{
        home.style.display = "block";
        game.style.display = "none";
        pagGame.style.display = "block";
        screenButtonGame.style.display = "block";
        hand1.length = 0;
        hansCompleted = 0;
        play2 = 0;

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
    