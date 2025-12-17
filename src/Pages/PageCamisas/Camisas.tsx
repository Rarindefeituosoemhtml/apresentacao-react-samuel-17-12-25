import "./Camisas.css";
// import banner_01 from "../../assets/img/banner_02.png"
// import banner2 from "../../assets/img/camisa_1920x800 (1).jpg";
import camisa01 from "../../assets/img/camisaMaskCostas.webp"
import camisa02 from "../../assets/img/camisaUrso.png"
import camisa03 from "../../assets/img/camisaBall.png"
import camisa04 from "../../assets//img/CamisaAngelsCostas.webp"
// import camisa05 from "../../assets//img/camisaAkVinho.png"
// import camisa06 from "../../assets//img/camisaAkCinza.png"
// import camisaEmBreve from "../../assets/img/simbolo.jpg"

import Banner from "./../../Components/Banner/Banner"


function Camisas() {
  return (
    <>




      <main className="mainCamisas">

       <section className="banner">
    <Banner />
        
       </section>

        <section className="container">

            <div className="titulo">
                <span>OVERSIZED</span>
            </div>

            <section className="cards">

                <div className="card">

                    <img src={camisa01} alt=""/>

                    <h2>Oversized Drop Maks Off</h2>
                        <span> R$219,90 </span>

                </div>

                <div className="card">

                    <img src={camisa02} alt=""/>

                    <h2>Oversized Drop bear</h2>
                        <span> R$149,99 </span>
                              <p></p>
                </div>
                <div className="card">

                    <img src={camisa03} alt=""/>

                    <h2>Oversized Drop 8 Ball</h2>
                        <span> R$219,90 </span>
                              <p></p>
                </div>

                <div className="card">

                    <img src={camisa04} alt=""/>

                    <h2>Oversized Drop Angels</h2>
                        <span> R$149,99 </span>
                              <p></p>
                </div>
                <div className="card">

                    <img className="em_breve" src={""} alt=""/>

                    <h2>???</h2>
                        <span> Drop Em Breve... </span>
                              <p></p>
                </div>
                <div className="card">

                    <img className="em_breve" src={""} alt=""/>

                    <h2>???</h2>
                        <span> Drop Em Breve...</span>
                              <p></p>
                </div>
             


              

            </section>

        </section>

    </main>
    
  
    </>
  );
}

export default Camisas;
