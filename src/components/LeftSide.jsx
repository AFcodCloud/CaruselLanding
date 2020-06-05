import React from "react"
import Nav from "./Nav.jsx"
import { connect } from "react-redux"


const LeftSide = ({currentPage})=>{
    return(
      <div className="content">
        {currentPage===3 ? <Nav /> : null}
        <div className="contact_form">
          <p>For feedback, fill out the form</p>
          <form action="">
            <input type="text" id="name" placeholder="Full name" />
            <input type="email" id="mail" placeholder="Email" />
            <input type="phone" id="phone" placeholder="Phone" />
          </form>
          <button className="btn-form">send</button>
          <div className="socialIcon">
            <div className="cocialIcon_item facebook"></div>
            <div className="cocialIcon_item twitter"></div>
            <div className="cocialIcon_item instagram"></div>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) =>(
  {
    currentPage:state.main.currentPage
  }
)

export default connect(mapStateToProps,{})(LeftSide)