


function isElementInViewPort(element){
  // console.log(element)
 
  // Get the new current position after every moseover event
  let rect = element.getBoundingClientRect();
  // console.log(rect)
  
  
  // get the height of the window 
  let viewPortBottom = window.innerHeight || document.documentElement.Height;
    console.log(document.documentElement.Height)

    
    // Get the Width and Height of the Window:
    // const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


  // get the width of the window 
  let viewPortRight = window.innerWidth || document.documentElement.Width;

  let isTopInViewPort = rect.top <= window.innerHeight-rect.height*2,
       isLeftInViewPort = rect.left <= window.innerWidth-rect.width*2;

  // window.innerHeight gives the value of total inner height of the total window
  // console.log(window.innerHeight)


  // react.height gives the value of button heighta
  // console.log(window.innerWidth-rect.width*2)

      
 
  //  rect.top gives the value in px of the element's distance from the top. 
      //  console.log(rect.top)
      
      
      // isBottomInViewPort = rect.bottom <= window.height -200 +"px",
      // isRightInViewPort = rect.right <= window.width -200 +"px";

 // check if element is completely visible inside the viewport
 return (isTopInViewPort && isLeftInViewPort );
}
// let topEle = document.getElementById('top_ele');
//  console.log("Is top element visible:  ", isElementInViewPort(topEle) )

// let bottomEle = document.getElementById('evil-button');
// console.log("Is bottom element visible:  ", isElementInViewPort(bottomEle) )

















// function findContainment(element, container) {

//     /*
//     Obtain the bounding rectangle for each element 
//     */
//     const brE = element.getBoundingClientRect()
//     const brC = container.getBoundingClientRect()
  
//     /* 
//     If the boundaries of container pass through the boundaries of
//     element then classifiy this as an overlap 
//     */
//     if (
//       /* Does container left or right edge pass through element? */
//       (brE.left < brC.left && brE.right > brC.left) ||
//       (brE.left < brC.right && brE.right > brC.right) ||
//       /* Does container top or bottom edge pass through element? */
//       (brE.top < brC.top && brE.bottom > brC.top) ||
//       (brE.top < brC.bottom && brE.bottom > brC.bottom)) {
  
//       return "overlap";
//     }
  
//     /* 
//     If boundaries of element fully contained inside bounday of
//     container, classify this as containment of element in container
//     */
//     if (
//       brE.left >= brC.left &&
//       brE.top >= brC.top &&
//       brE.bottom <= brC.bottom &&
//       brE.right <= brC.right
//     ) {
//       return "contained"
//     }
  
//     /* 
//     Otherwise, the element is fully outside the container 
//     */
//     return "outside"
  
//   }
  
//   const main = document.querySelector(".main")
//   console.log("A", findContainment(document.querySelector(".a"), main))
//   console.log("B", findContainment(document.querySelector(".b"), main))
//   console.log("C", findContainment(document.querySelector(".c"), main))
//   console.log("D", findContainment(document.querySelector(".d"), main))
//   console.log("E", findContainment(document.querySelector(".e"), main))
//   .main {
//     width: 50%;
//     height: 200px;
//     border: 5px solid #000;
//     position: relative;
//   }
  
//   .obj {
//     width: 40px;
//     height: 40px;
//     border: 1px solid blue;
//     position: absolute;
//   }
//   <div class="main">
//     <div style="top:105%; left:25%;" class="obj a">A</div>
//     <div style="top:15%; left:-5%;" class="obj b">B</div>
//     <div style="top:20%; left:40%;" class="obj c">C</div>
//     <div style="top:20%; left:110%;" class="obj d">D</div>
//     <div style="top:90%; left:95%;" class="obj e">E</div>
//   </div>