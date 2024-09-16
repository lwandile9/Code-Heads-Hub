let cardList =["js1","js2" ,"js3","js4" ,"js5" ,"js6","js7"]
let currentCardCount = 0;

let buttonNext = document.getElementById("js-intro") ;
let buttonPrev = document.getElementById("js2-intro") ;

//  moves to the next slide
buttonNext.addEventListener("click" , function (){
    if(currentCardCount <= 7){currentCardCount++;
    
        console.log(currentCardCount)
        buttonPrev.removeAttribute("disabled");
        let card = document.getElementById(cardList[currentCardCount]);
        card.classList.remove("hide");}else{
            console.log("No more cards to display");
        }
    
     
    
    
    
    });

    
//  moves to the previous slide
buttonPrev.addEventListener("click" , function (){
    if (currentCardCount >= 1){ 
        
        currentCardCount--;
   
        
        let card = document.getElementById(cardList[currentCardCount]);
         card.classList.add("hide");
   
    }
   
   if(currentCardCount == 4)
    buttonNext.addAttribute("disabled");
   
   });
   

 
