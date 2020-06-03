import './styles/fonts.css'
import './styles/style.scss'
import './assets/video.mp4'



let menuEl = document.querySelectorAll('li');

for(let i=0;i<menuEl.length;i++){
 menuEl[i].addEventListener('click', (e)=>selectMenu(e))
}
   
    const getActivClass = ()=>{
       let text =  document.querySelectorAll('.present_text>*')
       for(let i=0; i<text.length; i++){
        text[i].classList.add('active')
       }  
    }

let cube=document.querySelector('.cube')
let deg=0;

 


//переход по меню
const selectMenu = (e)=>{
    ToggleBurger()
    if(e.target.id==='home'){
        deg=0;
        cube.style.transform=`rotateY(${deg}deg)`
        }else if(e.target.id=='about'){
            deg=-90;
            cube.style.transform=`rotateY(${deg}deg)`
        }else if(e.target.id=='work'){
            deg=-180
        cube.style.transform=`rotateY(${deg}deg)`;
        getActivClass()
        }else if(e.target.id=='contact'){
            deg=-270;
            cube.style.transform=`rotateY(${deg}deg)`}
    }
    


    
//слайдер
cube.onmousedown = function(event) {

    let startX = event.clientX;
    let pointLeft = startX-300
    let pointRight = startX+300

    moveAt(event.clientX);
  
   
    function moveAt(clientX) {

       if(clientX<=pointLeft){
           deg=deg-90
       cube.style.transform = `rotateY(${deg}deg)`;
       document.removeEventListener('mousemove', onMouseMove);
       }else if(clientX>=pointRight){
           deg=deg+90;
        cube.style.transform = `rotateY(${deg}deg)`;
        document.removeEventListener('mousemove', onMouseMove);
        }
    }
  
    function onMouseMove(event) {
        event.preventDefault()
      moveAt(event.clientX);
    }
    function prevdef(event){
        event.preventDefault()
    }
    document.addEventListener('mousemove', prevdef)
    document.addEventListener('mousemove', onMouseMove);
  
    document.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      cube.onmouseup = null;
    };
  
  };
 
  const ToggleBurger = ()=>{
     let nav = document.querySelectorAll('.nav');
     let burger = document.querySelectorAll('.burger')
     for(let i=0; i<nav.length; i++){
     nav[i].classList.toggle('active')
     burger[i].classList.toggle('active')}
  }
const burger = document.querySelectorAll('.burger')
for(let i=0;i<burger.length;i++){
    burger[i].addEventListener('click', ToggleBurger)
}

    (window.onload = function(){
        if(window.innerWidth >= 801){
        document.querySelector('.video_container').innerHTML = '<video src="./video.mp4" autoplay="" muted="" loop=""></video>'
        }
    })()

    window.addEventListener("orientationchange", function() {
       this.setTimeout(()=>{
           if(window.innerWidth >= 801){
            document.querySelector('.video_container').innerHTML = '<video src="./video.mp4" autoplay="" muted="" loop=""></video>'
            }
       },0) 
    }, true);
