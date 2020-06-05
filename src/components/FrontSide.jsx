import React from "react"
import Nav from "./Nav.jsx"
import { connect } from "react-redux"


const FrontSide = ({currentPage})=>{
    return(
            <div className="content">
              {currentPage===0 ? <Nav /> : null}
              <div className="home_text">
                <p>Expand your horizons with us</p>
              </div>
              <button className="btn">explore work</button>
            </div>
    )
}

const mapStateToProps = (state) =>(
  {
    currentPage:state.main.currentPage
  }
)

export default connect(mapStateToProps,{})(FrontSide)