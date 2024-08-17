
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
        imgRules = document.querySelector("#img-rules");
        let count = 3;
        let record=0;
        let elementalreadyMoved = false;

        const choseHands = {
            rock:{
                img:"images/icon-rock.svg",
                alt:"img hand rock",
                backgroundColor:"hsl(349, 71%, 52%)"
            },
            paper:{
                img:"images/icon-paper.svg",
                alt:"img hand paper",
                backgroundColor:" hsl(230, 89%, 62%)"
            },
            scissors:{
                img:"images/icon-scissors.svg",
                alt:"img hand scissors",
                backgroundColor:"hsl(39, 89%, 49%)"
            },
            spoke:{
                img:"images/icon-spock.svg",
                alt:"img hand spock",
                backgroundColor:" hsl(189, 59%, 53%)"
            },
            lizard:{
                img:"images/icon-lizard.svg",
                alt:"img hand lizard",
                backgroundColor:" hsl(261, 73%, 60%)"
            }
        };

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
                    console.log(positiontouch)
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
                    }
                    if(window.innerWidth >= 450) document.querySelector(".bonusGame").style.display = "none";
                    
                    };

            }
        },false);
    };
    function checkedArea(){
        
    }

    swipeArea();
    
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

    function simpleGame(){

    }
    function setcountDown(e){
        home.style.display = "none";
        countdown.style.display = "block";
        

        let stopTime = setInterval(()=>{
        let handGameNumber;

            if(count == 1){ 
                count = 4;

                clearInterval(stopTime);

                elementalreadyMoved == false ? handGameNumber = Math.trunc(Math.random()*3):handGameNumber = Math.trunc(Math.random()*5);
    
                playerSelectStyle(handGame, handGameNumber);

                if(e.target.matches(".paper") || e.target.matches(".paper *")){
                    playerSelectStyle(handPlayer,0);
                    gameResult(0,handGameNumber);
                }else if(e.target.matches(".scissors")||e.target.matches(".scissors *")){
                    playerSelectStyle(handPlayer,1);
                    gameResult(1,handGameNumber);
                }else if(e.target.matches(".rock *") || e.target.matches(".rock")){
                    playerSelectStyle(handPlayer,2);
                    gameResult(2,handGameNumber);
                }else if(e.target.matches(".spock") || e.target.matches(".spock *")){
                    playerSelectStyle(handPlayer,3);
                    gameResult(3,handGameNumber);
                }else if(e.target.matches(".lizard") || e.target.matches(".lizard *")){
                    playerSelectStyle(handPlayer,4);
                    gameResult(4,handGameNumber);
                }

                countdown.style.display = "none";
                game.style.display = "flex";  
            };
            countdown.innerHTML = `<h1>${--count}</h1>`;
        },1000);
    };

    // Event clic player

    hands.forEach(e => {
        e.addEventListener("click",(e)=>{
            setcountDown(e);
        });
    });
    handsBonus.forEach(e =>{
        e.addEventListener("click",(e)=>{
            setcountDown(e);
        });
    });
    playAgain.addEventListener("click",(e)=>{
        home.style.display = "block";
        game.style.display = "none";
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


