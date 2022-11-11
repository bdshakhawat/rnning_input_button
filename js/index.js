const evilButton=document.getElementById('evil-button');
            // const OFFSET=100;
            // evilButton.addEventListener('click',()=>{
            //     alert("Good Try")
            //     window.close()
            // })

            // Main event
            document.addEventListener('mouseover',(e)=>{

                // Step 1: get current position of the element.
                const buttonBox=evilButton.getBoundingClientRect()
                console.log(buttonBox)

                // Step 2: set the element into a new position
                // evilButton.style.position = "absolute";
                // evilButton.style.left = buttonBox.x + 50 +'px';
                // evilButton.style.top = buttonBox.y + 50 +'px';
                function setNewPosition(x,y){
                    evilButton.style.position = "absolute";
                    evilButton.style.left = buttonBox.x + 50 +'px';
                    evilButton.style.top = buttonBox.y + 50 +'px';
                }

                // Step 3: check the boundary and keep the element inside the window.

                // const horizontalDistanceFrom=distanceFromCenter(buttonBox.x,x,buttonBox.width)
                // const verticalDistanceFrom=distanceFromCenter(buttonBox.y,y,buttonBox.height)
                // const horizontalOffset=buttonBox.width/2 + OFFSET;
                // const verticalOffset=buttonBox.height/2 + OFFSET;

                // if(Math.abs(horizontalDistanceFrom)<= horizontalOffset && Math.abs(verticalDistanceFrom<=verticalOffset)){
                //     // setButtonPosition(
                        
                //     // )
                // }


                // console.log(buttonBox.x,buttonBox.y)
            })
            function distanceFromCenter(boxPosition,mousePosition,boxSize){
                return boxPosition - mousePosition + boxSize/2
            }


