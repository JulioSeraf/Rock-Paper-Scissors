
    const rulesImg = document.querySelector(".rulesImg"),
        hands = document.querySelectorAll(".hands"),
        home = document.getElementById("home"),
        game = document.getElementById("game"),
        handPlayer = document.getElementById("player-hand"),
        handGame = document.querySelector(".game-hand"),
        score = document.getElementById("score"),
        playAgain = document.querySelector(".play-again"),
        countdown = document.querySelector(".countdown"),
        touchscrren = document.querySelector(".touch");
        let count = 3;
        let record=0;
        let startTouch = 0,
        endTouch = 0;

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
        }

        console.log(hands)

    function swipeArea(){

        
        home.addEventListener("touchstart",(e)=>{

            startTouch = e.changedTouches[0].screenX;
            // console.log(startTouch)
            // handleScreen(startTouch)
        },false)

        // home.addEventListener("touchend",(e)=>{
        //     endTouch = e.changedTouches[0].screenX;
        //     // handleScreen(endTouch)
        //     console.log(endTouch)
        // },false)
        let moveElemento = true;
        let elementPosition = -100;
        
        home.addEventListener("touchmove", (e)=>{
            let touchloq = e.changedTouches[0].screenX;
            let positiontouch = startTouch - touchloq;
            
           

           if(positiontouch < 0 && positiontouch > -100 && moveElemento == true){
            home.style.cssText = `left:${positiontouch}%;`;
            moveElemento = false;
            if(positiontouch <= -50 ){
            home.style.cssText = `left:-100%;
            transition:1s all;`;
            }
            if(positiontouch >= -50 ){
                home.style.cssText = `left:0%;
                transition:1s all;`;
            }
           }
           if(positiontouch > 0 && positiontouch < 100 && moveElemento == false){
            positiontouch = positiontouch - 100;
            console.log(positiontouch)
            home.style.cssText = `left:${positiontouch}%;`;
            moveElemento = true;
            if(positiontouch >= -50 ){
                home.style.cssText = `left:0%;
                transition:1s all;`;
            }
            if(positiontouch <= -50 ){
                home.style.cssText = `left:-100%;
                transition:1s all;`;
                }
        }


        //   home.style.cssText = `left:${positiontouch}%;`;
        //   if(positiontouch < -50 ){
        //     home.style.cssText = "left:0%;"
        //   }
            
        })
        
        
        
    }

    // function handleScreen(start,end){
        
    // console.log( endTouch, startTouch)

    //     if(start > end){
    //         simpleGame.style.cssText = "left:0;"
    //     }
    //     if(end > start){
    //         bonusGame.style.cssText = ""
            
    //     }
    // }
    swipeArea();
        
    function gameSection(player,nu){
        // home.style.display = "none";
        // game.style.display = "flex";

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
        }
    };

    function gameResult(plaNum,gamNum){
        let msgResult = document.getElementById("msgRe");
        if(plaNum == gamNum){
            msgResult.textContent = "YOU TIED";
            record = record + 0.5;
        }else if((plaNum=== 0 && gamNum === 1) || (plaNum === 1 && gamNum === 2)||(plaNum === 2 && gamNum === 0)){
            msgResult.textContent = "YOU LOSE";
            record = 0;
        }else if((plaNum === 0 && gamNum === 2) || (plaNum === 1 && gamNum === 0) || (plaNum === 1 && gamNum === 2) ||(plaNum === 2 && gamNum === 1) ){
            msgResult.textContent = "YOU WIN!";
            record = record + 1;
        };
        score.textContent = record;
    };

    function setcountDown(e){

        home.style.display = "none";
        countdown.style.display = "block";

        let stopTime = setInterval(()=>{
            if(count == 1){ 
                count = 4;

                clearInterval(stopTime);

                let handGameNumber = Math.trunc(Math.random()*3);
    
                gameSection(handGame, handGameNumber);
                // setcountDown();
                if(e.target.matches("#paper")|| e.target.matches("#paper *") ){
                    gameSection(handPlayer,0)
                    gameResult(0,handGameNumber);
                }else if(e.target.matches("#scissors")||e.target.matches("#scissors *")){
                    gameSection(handPlayer,1)
                    gameResult(1,handGameNumber);
                }else if(e.target.matches("#rock *") || e.target.matches("#rock")){
                    gameSection(handPlayer,2)
                    gameResult(2,handGameNumber);
                };

                countdown.style.display = "none";
                game.style.display = "flex";  
            };
            countdown.innerHTML = `<h1>${--count}</h1>`;
        },1000);
    };

    // Event clic player

    hands.forEach(e => {
        e.addEventListener("click",(e)=>{
            setcountDown(e)
        });
    });
   
    playAgain.addEventListener("click",(e)=>{
        home.style.display = "block";
        game.style.display = "none"
    })
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


