import React from "react";
import { connect } from "react-redux";
import {setSlidePage} from "../redux/mainReducer"
import  FrontSide  from "./FrontSide.jsx";
import  BackSide  from "./BackSide.jsx";
import  RightSide  from "./RightSide.jsx";
import  LeftSide  from "./LeftSide.jsx";


 const App = ({currentPage, deg, setSlidePage}) => {

     const Slider = (event) => {
        let page;
        let startX = event.clientX;
        let pointLeft = startX-300
        let pointRight = startX+300
    
        moveAt(event.clientX);
      
       
        function moveAt(clientX) {
    
           if(clientX<=pointLeft){
            deg=deg-90
            currentPage === 3 ? page=0 : page=currentPage+1
            setSlidePage(deg, page)
            document.removeEventListener('mousemove', onMouseMove);
        }else if(clientX>=pointRight){
            deg=deg+90;
            currentPage === 0 ? page=3 : page=currentPage-1
            setSlidePage(deg, page)
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
    return (
    
        <div className="container">
        <div id="cube" className="cube" 
            style={{transform:`rotateY(${deg}deg)`}} 
            onMouseDown={Slider} >
        <div className="side front">
            <FrontSide/>
        </div>
        <div className="side back">
            <BackSide/>
        </div>
        <div className="side right">
            <RightSide/>
        </div>
        <div className="side left">
            <LeftSide/>
        </div>
        </div>
      </div>
  );
};

const mapStateToProps = (state) => (
     {
        currentPage:state.main.currentPage,
        deg:state.main.deg
    }
)

export default connect (mapStateToProps,{setSlidePage}) (App)