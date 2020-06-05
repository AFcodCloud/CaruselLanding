import React, { useState } from 'react'
import { connect } from 'react-redux'
import {setPageAC} from '../redux/mainReducer.js'

 const Nav = ({setPageAC, currentPage})=>{
  const selectPage = (e) =>{
    let type=e.target.innerText.toUpperCase()
    setPageAC(type)
  }
  const menu = ["home", "about", "work", "contact"]
  
const [toggleMenu, setToggleMenu] = useState(null)
 

    
  const ToggleBurger = ()=>{
  let oc;
  toggleMenu===null ? oc="active" : oc=null;
  setToggleMenu(oc)
    } 
    


  return(
        <>
        <span className={`burger ${toggleMenu}`}  onClick={ToggleBurger} />
        <div className={`nav ${toggleMenu}`} >
        <div className="logo">Sunrise</div>
        <div className="menu" onClick={(e)=>{selectPage(e)}}>
          <ul>
         { menu.map((i,j) => j === currentPage ?
          <li key={j} className="select">{i}</li>:
           <li key={j}>{i}</li>)}
          </ul>
        </div>
      </div>
      </>
    )
}
const mapStateToProps = (state)=>(
  {
    currentPage:state.main.currentPage
  }
)

export default connect(mapStateToProps, {setPageAC} )(Nav)