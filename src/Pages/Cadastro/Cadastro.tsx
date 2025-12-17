import "./Cadastro.css"




export default function Cadastro() {
  return (
   <>
   <main>

        <section className="container_cadastro">
            <h2>Cadastro</h2>


            <div className="box_cadastro">
                <div className="Cadastro_coluna1">
                    <div className="oversized">
                        <label htmlFor="over">oversized</label>
                        <input type="text" />
                    </div>

                    <div className="categoria_cadastro">
                        <div className="categoria">
                            <label htmlFor="categoria">Categoria</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>


                <div className="Cadastro_coluna2">
                    <label htmlFor="desc">Descrição</label>
                    <textarea name="" id="desc"></textarea>
                </div>
            </div>
            <input className="confirmar" type="button" value="Confirmar"/>
        </section>

    </main>
   </>
  )
}
