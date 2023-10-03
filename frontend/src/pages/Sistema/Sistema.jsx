import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/context.jsx"
import { Link } from "react-router-dom";
import './Sistema.css';


/* import de componentes */
import Mesa from '../../components/mesa/Mesa';
import Relatorio from '../../components/Relatorio/Relatorio';
import Usuario from '../../components/telaUsuarios/Usuarios'
import Produtos from "../../components/produtos/Produtos.jsx";
import Categoria from "../../components/categoria/categoria.jsx";
import Pedidos from "../../components/Pedidos/Pedidos.jsx";

/* import de imagens */
import pedido from './images/pedido.png';
import produto from './images/produto.png';
import categorias from './images/categoria.png';
import mesas from './images/table.png';
import usuarios from './images/usuarios.png';
import administrador from './images/administrador.png';
import grafico from './images/grafico.png';




function Sistema() {
    const { logout } = useContext(MainContext);
    const [nomeUsuario, setNomeUsuario] = useState("");

    useEffect(() => {
        const usuario = localStorage.getItem("usuario");
        if (usuario) {
            setNomeUsuario(usuario)
        }
    }, []);


    /*  Mostra a pagina selecionada */
    const [toggle, mostra] = useState(1);
    function mostraPagina(id) {
        mostra(id)
    }

    return (
        <>
            <div className="sistema">
                <div className="logo1 ">
                    <Link className="digitalMenu" to="/">
                        <h1 className="logo"><span className="color-secondary">D</span>igital <span className="color-secondary">M</span>enu</h1>
                    </Link>
                </div>

                <div className='barra-lateral fade2'>
                    <div className="botoes-barraLateral">
                        <button onClick={() => mostraPagina(1)}
                            className="btn-direciona marrom ">Relatórios <img className="img-botoes" src={grafico} alt="" /></button>
                        <button onClick={() => mostraPagina(2)}
                            className="btn-direciona marrom ">Pedidos <img className="img-botoes" src={pedido} alt="" /></button>
                        <button onClick={() => mostraPagina(3)}
                            className="btn-direciona marrom ">Produtos <img className="img-botoes" src={produto} alt="" /></button>
                        <button onClick={() => mostraPagina(4)}
                            className="btn-direciona marrom ">Categorias <img className="img-botoes" src={categorias} alt="" /></button>
                        <button onClick={() => mostraPagina(5)}
                            className="btn-direciona marrom">Mesas <img className="img-botoes" src={mesas} alt="" /></button>
                        <button onClick={() => mostraPagina(6)}
                            className="btn-direciona marrom">Usuários <img className="img-botoes" src={usuarios} alt="" /></button>
                        <button className="btn-direciona marrom" onClick={logout}>Sair</button>
                    </div>

                </div>

                <div className='barra-superior '>
                    <div className="usuario">
                        <div>
                            <h2>Bem-vindo(a)!</h2>
                            <h2>{nomeUsuario}</h2>
                        </div>
                        <img className="img-usuario" src={administrador} alt="" />
                    </div>
                </div>
                
                <div className='container-principal'>
                    <div className={toggle === 1 ? "show-conteudo" : "conteudo"}>
                        <Relatorio />
                    </div>
                    <div className={toggle === 2 ? "show-conteudo" : "conteudo"}>
                        <Pedidos />
                    </div>
                    <div className={toggle === 3 ? "show-conteudo" : "conteudo"}>
                        <Produtos />
                    </div>
                    <div className={toggle === 4 ? "show-conteudo" : "conteudo"}>
                        <Categoria />
                    </div>
                    <div className={toggle === 5 ? "show-conteudo" : "conteudo"}>
                        <Mesa />
                    </div >
                    <div className={toggle === 6 ? "show-conteudo" : "conteudo"}>
                        <Usuario />
                    </div>
                </div>
            </div>

            <h1>DigitalMenu - Copyright</h1>





        </>
    )
}

export default Sistema;