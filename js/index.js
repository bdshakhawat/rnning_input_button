const evilButton=document.getElementById('evil-button');
            
// Main event
evilButton.addEventListener('mouseover',(e)=>{
    

    let isInWindow = isElementInViewPort(evilButton)
    // console.log(`Is the element in the window ${isInWindow}`)
    
    
    // Step 1: get current position of the element.
    const buttonBox=evilButton.getBoundingClientRect()
    // console.log(buttonBox)
   function keepRunning(){
    evilButton.style.position = "absolute";

    // if condition  is true then button will move 50px from its new position if false then minus 500px 
    // from the buttonBox.x that is distance of the button box from x axis. 
    evilButton.style.left = isInWindow ? buttonBox.x + 50 +'px' : buttonBox.x - 500 + 'px';
    // console.log(buttonBox.x)
    // console.log(evilButton.style.left) // 58, 116, 174, 232......348px difference is 58(50px +8px by defalt body margin)
    evilButton.style.top = isInWindow ? buttonBox.y + 50 +'px' : buttonBox.y - 500 +'px' ;

   }
   keepRunning();
    

    
    // Step 2: set the element into a new position
    // function setNewPosition(x,y){
    //     evilButton.style.position = "absolute";
    //     evilButton.style.left = buttonBox.x + 50 +'px';
    //     evilButton.style.top = buttonBox.y + 50 +'px';
    // }

    // Step 3: check the boundary and keep the element inside the window.
})
            

// function distanceFromCenter(boxPosition,mousePosition,boxSize){
    
//     return boxPosition - mousePosition + boxSize/2
    
// }


