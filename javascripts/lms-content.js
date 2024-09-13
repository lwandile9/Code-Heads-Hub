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
   