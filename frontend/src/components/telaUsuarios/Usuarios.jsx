import './Usuarios.css';
import { MainContext } from '../../context/context';
import { toast, ToastContainer } from 'react-toastify';
import { useState, useContext } from 'react';

function Usuarios() {
    // const { logout } = useContext(MainContext);
    const {cadastraUser} = useContext(MainContext);
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <>

            <main className='usuario-completo'>
                <div>
                    <h1 className='pag-titulo-sistema fade2'>Usuários</h1>
                    <h2 className='txt-pesquisar-sistema '>Pesquisar</h2>
                </div>
                <div>
                    <button className='btn-sistema laranja'>ID</button>
                    <button className='btn-sistema laranja'>Nome</button>
                    <button className='btn-sistema laranja'>Status</button>
                    <button className='btn-sistema laranja'>Todos</button>
                </div>
                <div className='usuarios-tabela'>
                    TABELA AQUI

                </div>
                <div className='usuarios-opcoes'>
                    <div className='usuarios-opcoes-esquerda'>
                        <h2 className='font-opcoes-sistema'>Controle de usuários</h2>
                        <span className='font-sistema-span'>Usuário:
                            <input
                            autoFocus
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder=''
                             type="text"
                            />
                            </span>
                        <span className='usuario-span-margem font-sistema-span'>Senha:
                        <input
                        autoFocus
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder=''
                        type="text"
                        />
                        </span>
                        <button className='btn-sistema laranja btn-cadastrar-usuario'
                        type='submit'
                        onClick={(e) => cadastraUser(e, nome, senha)}
                        >
                            Cadastrar
                        </button>
                    </div>
                    <div className='usuario-tipoacessoLado'>
                        <div className='lado-user'>
                        </div>


                    </div>



                    <div className='usuarios-opcoes-direita'>
                        <h2 className='font-opcoes-sistema'>Opções</h2>
                        <button className='btn-sistema laranja'>Atualizar</button>
                        <button className='btn-sistema laranja'>Desativar</button>

                    </div>
                </div>
            </main>

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

export default Usuarios;