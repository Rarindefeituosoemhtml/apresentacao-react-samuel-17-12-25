import "./Camisas.css";
// import banner_01 from "../../assets/img/banner_02.png"
// import banner2 from "../../assets/img/camisa_1920x800 (1).jpg";
import camisa01 from "../../assets/img/CamisaAngels.webp"
import camisa02 from "../../assets/img/camisaMaskFrente.webp"
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

                    <h2>Oversized Drop Angels</h2>

                </div>

                <div className="card">

                    <img src={camisa02} alt=""/>

                    <h2>Oversized Drop Maks Off</h2>

                </div>

              
              

            </section>

        </section>

    </main>
    
  
    </>
  );
}

export default Camisas;
