import { useState, useContext, useEffect} from 'react';
import './Mesa.css';
import { MainContext } from '../../context/context';
import { toast, ToastContainer } from 'react-toastify';




function Mesa() {

    const {cadastrarMesa, deletarMesa, ativarMesa, listarMesas} = useContext(MainContext);

    const [mesas, setMesas] = useState("")
    const [idMesa, setIdMesa] = useState("");

    useEffect(() => {
        listarMesas().then((comp) => {
          setMesas(comp);
        });
      });

    return (
        <>

            <div className="mesa-main">
                <h1 className='pag-titulo-sistema fade2'>Mesas</h1>
                <h2 className='txt-pesquisar-sistema'>Pesquisar</h2>
                <div>
                    <button className='btn-sistema laranja'>Status</button>
                    <button className='btn-sistema laranja'>Número</button>
                    <button className='btn-sistema laranja'>Todos</button>
                </div>
                <div className="mesa-tabela">
                    {JSON.stringify(mesas)}
                </div>
                <div className="mesa-cadastrOpcoes">
                    <div className="mesa-cadastrOpcoes-esquerda">
                        <h2 className='font-opcoes-sistema'>Cadastrar Mesa</h2>
                        <span className='font-sistema-span'>Número da mesa: 
                            <input 
                            autoFocus
                            value={idMesa} 
                            onChange={(e) => setIdMesa(e.target.value)}
                            placeholder='' 
                            type="text" 
                        />
                        </span>
                        <button className='btn-sistema laranja'
                        type='submit'
                        onClick={(e)=> cadastrarMesa(e, idMesa)}
                        >
                            Cadastrar
                        </button>
                    </div>
                    <div className="mesa-cadastrOpcoes-direita">
                        <h2 className='font-opcoes-sistema'>Opções</h2>
                        <button className='btn-sistema laranja'
                        type='submit'
                        onClick={(e)=> deletarMesa(e, idMesa)}
                        >
                            Desativar
                        </button>
                        <button className='btn-sistema laranja'
                        type='submit'
                        onClick={(e) => ativarMesa(e, idMesa)}
                        >
                            Ativar
                        </button>
                    </div>
                </div>

            </div>
            <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
            />
        </>
    )

}
export default Mesa;