let cardList =["html1","html2" ,"html3","html4" ,"html5" ,"html6","html7"]
let currentCardCount = 0;


//const nextSlide =document.getElementById("card");
//nextSlide.classList.add("hide");

let buttonNext = document.getElementById("html-intro") ;
let buttonPrev = document.getElementById("html2-intro") ;


//  moves to the next slide
buttonNext.addEventListener("click" , function (){
if(currentCardCount <= 5){currentCardCount++;

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

   //code for js content

   let cardListJs =["js1","js2" ,"js3","js4" ,"js5" ,"js6","js7"]
let currentCardCountJs = 0;

let buttonNextJS = document.getElementById("js-intro") ;
let buttonPrevJs = document.getElementById("js2-intro") ;

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
buttonPrevCss.addEventListener("click" , function (){
    if (currentCardCount >= 1){ 
        
        currentCardCount--;
   
        
        let card = document.getElementById(cardList[currentCardCount]);
         card.classList.add("hide");
   
    }
   
   if(currentCardCount == 4)
    buttonNext.addAttribute("disabled");
   
   });
   
   

   //code for css content

   let cardListCss =["Ccs1","Css2" ,"Css3","Css4" ,"Css5" ,"Css6","Css7"]
let currentCardCountCss = 0;

let buttonNextCss = document.getElementById("Css2-intro") ;
let buttonPrevCss = document.getElementById("Css-intro") ;

//  moves to the next slide
buttonNextCss.addEventListener("click" , function (){
    if(currentCardCount <= 7){currentCardCount++;
    
        console.log(currentCardCount)
        buttonPrevCss.removeAttribute("disabled");
        let cardCss = document.getElementById(cardListCss[currentCardCountCss]);
        cardCss.classListCss.remove("hide");}else{
            console.log("No more cards to display");
        }
    
     
    
    
    
    });

    
//  moves to the previous slide
buttonPrevCss.addEventListener("click" , function (){
    if (currentCardCountCss >= 1){ 
        
        currentCardCountCss--;
   
        
        let cardCss = document.getElementById(cardListCss[currentCardCountCss]);
         cardCss.classListCss.add("hide");
   
    }
   
   if(currentCardCountCss == 4)
    buttonNextCss.addAttribute("disabled");
   
   });
   
   