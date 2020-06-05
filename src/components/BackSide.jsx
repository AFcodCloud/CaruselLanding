import React from "react"
import Nav from "./Nav.jsx"
import { connect } from "react-redux"


 const BackSide = ({currentPage})=>{
   let activeClass;
   if(currentPage===1){
     activeClass="active"
   }
    return(
      <div className="content">
        {currentPage===2 ? <Nav /> : null}
        <div className="present_text">
          <h1 className={activeClass}>Lorem ipsum & dolor sit.</h1>
          <p className={activeClass}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Placeat obcaecati modi consequuntur quia ipsum deleniti
            molestiae, optio amet repudiandae accusamus commodi,
            consectetur, veniam odit? Veritatis odit facere voluptatem a
            ipsa. Saepe sunt ducimus harum id nisi libero doloremque quam
            esse laborum porro quos modi veniam, possimus adipisci
            officiis fugit expedita?
          </p>
          <p className={activeClass}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Placeat obcaecati modi consequuntur quia ipsum deleniti
            molestiae, optio amet repudiandae accusamus commodi,
            consectetur, veniam odit? Veritatis odit facere voluptatem a
            ipsa. Saepe sunt ducimus harum id nisi libero doloremque quam
            esse laborum porro quos modi veniam, possimus adipisci
            officiis fugit expedita? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Amet eligendi aperiam provident
            et numquam deserunt doloremque voluptates ea perferendis! Nemo
            culpa sint nihil alias earum porro velit similique nulla
            error. Cumque soluta hic, quisquam ipsa deleniti numquam quos
            vero error neque quae eveniet ipsam repellat, obcaecati
            explicabo? Et, harum? Provident?
          </p>
        </div>
        <div className="opacity_block"></div>
        <div className="video_container"></div>
      </div>
    )
}
const mapStateToProps = (state) =>(
  {
    currentPage:state.main.currentPage
  }
)

export default connect(mapStateToProps,{})(BackSide)