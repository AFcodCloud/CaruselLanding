import './styles/fonts.css'
import './styles/style.scss'
import './assets/video.mp4'



let menuEl = document.querySelectorAll('li');

for(let i=0;i<menuEl.length;i++){
 menuEl[i].addEventListener('click', (e)=>selectMenu(e))
}
   
    const getActivClass = ()=>{
       let text =  document.querySelector('.present_text')
       text.childNodes[1].classList.add('active')
       text.childNodes[3].classList.add('active')
    }

let cube=document.querySelector('.cube')
let deg=0;

   
const selectMenu = (e)=>{

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
