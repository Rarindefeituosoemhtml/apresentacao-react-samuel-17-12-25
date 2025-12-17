import { Link } from "react-router-dom"
import "./Home.css"

// import amostraCamisa from "../../assets/img/bannerCamisaHome.png" 
// import amostraCalca from "../../assets/img/bannerCalcaHome.png" 
// import amostraBone from "../../assets/img/DropMaskFrente.png" 
import Banner from "./../../Components/Banner/Banner"




export default function Home() {
  return (
    <>
    
      <section className="container_main">
        <main className="mainHome">
          <Banner />
          <h2 className="titulo_modelos">confira nossos modelos</h2>

          <div className="modelos">


            <Link to="/camisas" className="camisa">
              <div>
                <p>Camisas</p>
              </div>
            </Link>

            <Link to="/calcas" className="calca">
              <div>
                <p>Calças</p>
              </div>
            </Link>


            <Link to="/bone" className="bone">
              <div>
                <p className="span_bone">Boné</p>
              </div>
            </Link>




          </div>
        </main>


      </section>
     
    </>
  )
}
