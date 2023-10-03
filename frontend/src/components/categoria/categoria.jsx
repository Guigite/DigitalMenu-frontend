import './categoria.css';
function Categoria() {
    return (
        <>
            <div className="categoria-main">
                <div className="areaCategoria">
                    <h1 className="pag-titulo-sistema fade2">Categoria</h1>
                    <h2 className='txt-pesquisar-sistema'>Pesquisar</h2>
                    <div className="areaCategoria__botoes">
                        <button className="btn-sistema laranja">Id</button>
                        <button className="btn-sistema laranja">Nome</button>
                        <button className="btn-sistema laranja">Status</button>
                        <button className="btn-sistema laranja">Todos</button>
                    </div>

                    <div className="areaCategoria__areaTabela">

                    </div>

                    <div className="areaCategoria__areaDados">
                        <div className="areaCategoria__areaDados__areaCadastro">
                            <h2 className="font-opcoes-sistema">Cadastrar Categoria</h2>
                            <div className="areaCategoria__areaDados__areaCadastro__areaInput">
                                <p className="areaCategoria__areaDados__areaCadastro__areaInput__ID font-sistema-span">ID:</p>
                                <input type="text" className="areaCategoria__areaDados__areaCadastro__areaInput__input id" />
                            </div>
                            <div className="areaCategoria__areaDados__areaCadastro__areaInput">
                                <p className="areaCategoria__areaDados__areaCadastro__areaInput__NOME font-sistema-span">NOME:</p>
                                <input type="text" className="areaCategoria__areaDados__areaCadastro__areaInput__input" />
                            </div>
                        </div>
                        <div className="areaCategoria__areaDados__areaAlteracoes">
                            <h2 className='font-opcoes-sistema'>Alterar Categoria</h2>
                            <div className="areaCategoria__areaDados__areaAlteracoes__botoes">
                                <button className="btn-sistema laranja">Alterar</button>
                                <button className="btn-sistema laranja">Deletar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}
export default Categoria;
