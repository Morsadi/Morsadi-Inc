
   import React from 'react';
   
   export default function AnimateDivs(e){

    let _currentTab = e.target.getAttribute('name')
  
  //getting sub divs and store their refs in state
  let children = this[_currentTab].childNodes
  for (let i in children){
    if (children[i].nodeName === "DIV"){
  
      let currentRef = children[i].getAttribute('name')
  
      let val = 'val'+(i++)
  
      this.setState({
  
        [val]: currentRef,
      })
  
    }
  }
  
  
  let scrollPosition = this[_currentTab].scrollTop;// parent's scroll position
  
  //create pattern to apply on each paragraph
  this.fadeUp =(elem)=>{
  
    //clone argument
  let _elem = elem
  
      let target = this[_elem];//get element on DOM
      let targetPosition = target.offsetTop - (target.scrollHeight +100) // Element's position in the scrollable div
  
  
      //if target is on view, fadeUp
      if (scrollPosition >= targetPosition){
        target.style.opacity = 1
        target.style.transform = 'translatey(0px)'
  
      }else {
        target.style.opacity = 0
        target.style.transform = 'translatey(40px)'
      }
  }
  
  
  
  
  
  }
  
  