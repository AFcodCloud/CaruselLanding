import React from "react"
import Nav from "./Nav.jsx"
import { connect } from "react-redux"


const RightSide = ({currentPage})=>{
    return(
      <div className="content">
        {currentPage===1 ? <Nav /> : null}
        <div className="title">
          <h1>find your way</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, recusandae. Saepe inventore vitae enim illum repellat
            voluptatibus nostrum, provident ad sed ipsa qui similique
            dignissimos quas sequi rem animi, nulla numquam quisquam
            voluptas, corporis id labore tempore non facilis? Nostrum,
            sint fuga molestias saepe consequatur nam! Veniam et aliquid
            architecto.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolores dignissimos odit nesciunt veritatis neque eos corrupti
            quasi nisi voluptatum. Architecto omnis consequatur sequi
            optio nobis voluptas vel harum dicta. Ab molestiae dolorum
            commodi harum eligendi tempore nostrum autem perspiciatis
            placeat! Soluta quae enim ab incidunt ducimus obcaecati
            explicabo ullam qui nostrum laborum. Rerum culpa odio esse id
            accusamus eveniet dolorem voluptas obcaecati provident?
            Molestiae, quo. Quisquam consectetur earum reiciendis. Qui
            corporis quidem hic magnam? Quas unde obcaecati molestiae
            doloremque tenetur quos optio, praesentium quisquam dicta
            explicabo, ratione fuga. Dolorum beatae reiciendis magni vero
            ut, maiores nisi animi ea repellat maxime recusandae, sit
            suscipit alias quibusdam libero eligendi? Atque amet minus
            cumque animi cupiditate commodi harum iusto pariatur deserunt
            at nesciunt provident veritatis magnam ea eligendi fugiat ex
            sed a, nobis quos rem et libero ipsam! Enim doloribus rem
            temporibus, cum cumque dolorum facilis similique perferendis
            totam nam dolor harum praesentium ex, fugiat sunt pariatur
            labore tenetur soluta. Sit non reprehenderit incidunt delectus
            aspernatur at natus odio aliquam suscipit, veniam minus vel
            voluptatem nostrum amet dolore ipsam omnis molestias quia modi
            doloremque eligendi repudiandae eum deserunt cupiditate! Ab
            mollitia deserunt ea voluptas harum recusandae deleniti est,
            inventore natus, et itaque officia alias reprehenderit ullam
            ducimus quod! Doloremque ipsam sapiente eum rem, ullam maiores
            quod magni. Quidem maxime ut ullam iusto distinctio amet
            architecto quia veniam, et in doloremque sed perferendis ad
            eos blanditiis modi magnam id? Voluptatem, maiores nihil ut
            labore quam magnam at delectus? Laboriosam doloremque
            laudantium alias iure sequi consectetur velit dolorum
            provident error neque praesentium maiores repudiandae, numquam
            placeat, molestiae dolores soluta ducimus ad quia rerum cum
            illum ipsum eos! Quaerat repellat culpa deleniti ab
            asperiores? Distinctio dolor odio accusamus cupiditate iure
            eveniet illum minima aliquid repudiandae nemo consequuntur
            ratione itaque ducimus, voluptatibus ea neque omnis? Aliquid
            fugit libero, ratione atque impedit nesciunt veritatis totam
            quod provident obcaecati, cupiditate amet soluta ea nihil odio
            veniam earum. Animi dolorum distinctio nam, expedita
            laudantium assumenda! Aut placeat sint facere veritatis eius
            quo soluta praesentium ipsum, vero reprehenderit eveniet rem a
            architecto rerum tempore accusamus velit consequatur
            obcaecati. Sed a aperiam facilis corrupti cumque obcaecati,
            iusto, optio eaque ad tenetur quos hic architecto nam ea,
            dolor nihil rem vel! Deleniti, sint, aperiam rerum cupiditate
            nostrum at repudiandae quae minima repellendus, molestias
            voluptatum ab ratione vitae officiis commodi porro. Maxime,
            optio nostrum? Quos maiores recusandae, libero est amet
            voluptatibus consectetur dignissimos blanditiis dolore
            officiis quidem sunt hic nesciunt distinctio dolorum,
            excepturi optio, eveniet veritatis eius. Animi nihil repellat
            a neque vitae consequuntur id assumenda esse sed earum cum
            iure, rerum ad iste nostrum, perspiciatis, illo quod totam
            iusto laudantium. Recusandae fugiat architecto non neque fuga
            debitis! Enim esse ea commodi cupiditate animi reiciendis
            magni aperiam magnam ab, saepe adipisci nemo deserunt aliquam
            dicta reprehenderit odit eveniet possimus vel blanditiis fuga
            pariatur nulla aspernatur in tenetur! Debitis quia natus eum
            veritatis at maxime quibusdam molestiae voluptatibus aut rem
            laudantium quis atque tenetur, beatae facilis ipsum aliquid!
            Blanditiis, nemo illum! Impedit asperiores nisi provident.
          </p>
        </div>
      </div>
    )
}

const mapStateToProps = (state) =>(
  {
    currentPage:state.main.currentPage
  }
)

export default connect(mapStateToProps,{})(RightSide)