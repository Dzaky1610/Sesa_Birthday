
const animationTimeline = () =>{
    //split chars that need to be animated individually

   const textboxChars=document.getElementsByClassName('textbox__chat')[0];
   const hbd=document.getElementsByClassName('wish__hbd')[0];
   textboxChars.innerHTML =`<span>${textboxChars.innerHTML
   .split('')
   .join('</span><span>')}</span>`;
  
   hbd.innerHTML =`<span>${hbd.innerHTML
   .split('')
   .join('</span><span>')}</span>`;
  
   const IdeaTextTrans={
       opacity:0,
       y:-20,
       rotationX:5,
       skewX:'15deg',
       
    }
    
    const IdeaTextTransLeave={
        opacity:0,
        y:-20,
        rotationY:5,
        skewX:'-15deg'
    }
    
    
    const tl = new TimelineMax();
    tl.to('.container', 0.6,{
        visibility: 'visible'
    })
    .from('.one', 0.7,{
        opacity:0,
        y:10
    })
    
    .from('.two',0.4,{
        opacity:0,
        y:10
    })
    
    .to('.one', 0.7,{
        opacity:0,
        y:10
    },'+=3')
    .to('.two', 0.7,{
        opacity:0,
        y:10
    },'-=1')
    
    .from('.three', 0.7,{
        opacity:0,
        y:10
    })
    .to('.three', 0.7,{
        opacity:0,
        y:10
    },'+=3')
    
    
    .from('.four', 0.7,{
        opacity:0,
        scale:0.2
    })
    
    .from('.fake__button', 0.3,{
        opacity:0,
        scale:0.2
    })
    
    .staggerTo('.textbox__chat span', 1.5,{
        visibility:'visible',
    },0.05)
    
    .to('.fake__button', 1,{
        backgroundColor:'rgb(127,206,248)',
    },'+=4')
    .to('.four',0.5,{
        opacity:0,
        scale:0.2,
        y:-150
    },'+=1')
    
    .staggerFrom('.ide1',0.9,IdeaTextTrans)
    .staggerTo('.ide1',0.9,IdeaTextTransLeave, '+=2.5')
    .from('.ide2',0.7,IdeaTextTrans)
    .to('.ide2',0.7,IdeaTextTransLeave, '+=2.5')
    .from('.ide3',0.7,IdeaTextTrans)
    .to('.ide3 strong', 0.5,{
        scale:1.2,
        x:10,
        backgroundColor:'rgb(21,161,237)',
        color:'#fff'
        
    })
    .to('.ide3',0.7,IdeaTextTransLeave, '+=2.5')
    .from('.ide4',0.7,IdeaTextTrans)
    .to('.ide4',0.7,IdeaTextTransLeave, '+=2.5')

    .from('.ide5',0.7,{
        rotationX:15,
        rotationZ:-10,
        skewY:'-5deg',
        y:50,
        z:10,
        opacity:0,
    }, '+=1.5')
    .to('.ide5 span',0.7,{
        rotation:90,
        x:8,
        },'+=1.4')

        .to('.ide5', 0.7,{
            scale:0.2,
            opacity:0,
        },'+=2')


.staggerFromTo('.ballons img', 2,{
    opacity:0.9,
    y:1400,
},{
    opacity:1,
    y:-1000,
},0.2)

.from('.profile', 0.5,{
    opacity:0,
    scale:0.5,
    x:25,
    rotationZ:-45,
}, '-=1')
.staggerFrom('.wish__hbd span', 0.7,{
    opacity:0,
    y:-50,
    rotation:150,
    skewX:'30deg',
    ease:Elastic.easeOut.config(1, 0.5)
}, 0.1)

.staggerFromTo('.wish__hbd span', 0.7,{
    scale:1.4,
    rotateY:150

},{
    scale:1,
    rotate:0,
    color:'#ff69b',
    ease:Expo.easeOut
}, 0.1, 'party')

.from('.wish h5', 0.5,{
    opacity:0,
    y:10,
    skewX:'-15deg'
},'party')


         


}
animationTimeline();


