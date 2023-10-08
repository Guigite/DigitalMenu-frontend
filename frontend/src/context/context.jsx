import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import 'react-toastify/dist/ReactToastify.css';
import {createNotification} from '../util/toastify';
export const MainContext = createContext({});


// ------------------------- Provedor Principal ------------------------- //

function MainProvider({ children }) {
    
    //-----------> Variáveis
    const navigate = useNavigate();
    const [valido, setValido] = useState(false);

// ------------------------- Categoria ------------------------- //
    async function listarCategorias(){
        try{
            const { data } =  await api.get("/categorias/listar")
            return data
        }catch(e){
            console.log(e)
        }
    }


// ------------------------- Pedido ------------------------- //

async function listarPedidos(){
    try{
        const { data } = await api.get("/pedidos/all")
        return data
    }catch(e){
        console.log(e)
    }
}

// ------------------------- Relatório ------------------------- //



// ------------------------- Produto ------------------------- //

async function listarProdutos(){
    try{
        const { data } = await api.get("/produto")
        return data
    }catch(e){
        console.log(e)
    }
}


// ------------------------- Mesa ------------------------- //

    async function cadastrarMesa(e, idMesa) {
        e.preventDefault();
        // Verifica se numeroMesa é uma string e pode ser convertida em um número
        if (typeof idMesa === "string") {
            idMesa = parseInt(idMesa, 10);
    
            // Verifica se a conversão foi bem-sucedida
            if (isNaN(idMesa)) {
                console.error("Número inválido");
                createNotification("Número inválido", 'error');
                return; // Retorna para evitar a chamada da API com um número inválido
            }
        } else {
            console.error("Número inválido");
            createNotification("Número inválido", 'error');
            return; // Retorna para evitar a chamada da API com um número inválido
        }
    
        try {
            const { data } = await api.post("/mesa", { idMesa });
            // Realiza o redirecionamento após o sucesso da chamada da API
            console.log("Mesa criada com sucesso id da mesa:"+ idMesa);
            createNotification("Mesa cadastrada com sucesso!", 'success');
            navigate("/sistema");
        } catch (e) {
            console.error("Erro ao cadastrar mesa:", e);
            createNotification("Erro ao cadastrar mesa", 'error');
        }
    }

    async function deletarMesa(e, idMesa) {
        e.preventDefault();
        
        // Verifica se numeroMesa é uma string e pode ser convertida em um número
        if (typeof idMesa === "string") {
            idMesa = parseInt(idMesa, 10);
    
            // Verifica se a conversão foi bem-sucedida
            if (isNaN(idMesa)) {
                console.error("Número inválido");
                createNotification("Erro ao desativar a mesa", 'error');
                return; // Retorna para evitar a chamada da API com um número inválido
            }
        } else {
            console.error("Número inválido");
            createNotification("Erro ao desativar a mesa", 'error')         
            return; // Retorna para evitar a chamada da API com um número inválido
        }
    
        try {
            const { data } = await api.delete(`/mesa/${idMesa}`);
            console.log("Mesa deletada: " + idMesa);
            createNotification("Mesa desativada com sucesso!", 'success');
            navigate("/sistema");
        } catch (e) {
            console.error("Erro ao deletar mesa:", e);
            createNotification("Erro ao desativar a mesa", 'error')
        }
    }

    async function ativarMesa(e, idMesa) {
        e.preventDefault();
        
        // Verifica se numeroMesa é uma string e pode ser convertida em um número
        if (typeof idMesa === "string") {
            idMesa = parseInt(idMesa, 10);
    
            // Verifica se a conversão foi bem-sucedida
            if (isNaN(idMesa)) {
                createNotification("Erro ao ativar a mesa", 'error')
                return; // Retorna para evitar a chamada da API com um número inválido
            }
        } else {
            createNotification("Erro ao ativar a mesa", 'error')
            return; // Retorna para evitar a chamada da API com um número inválido
        }
    
        try {
            const { data } = await api.put(`/mesa/${idMesa}`);
            console.log("Mesa ativada: " + idMesa);
            createNotification("Mesa ativada com sucesso!", 'success');
            navigate("/sistema");
        } catch (e) {
            console.error("Erro ao ativar mesa:", e);
            createNotification("Erro ao ativar a mesa", 'error')
        }
    }
    
    async function listarMesas(){
        try{
            const { data } =  await api.get("/mesa/todas-mesas")
            return data
        }catch(e){
            console.log(e)
        }
    }
// ------------------------- Usuário ------------------------- //

     async function cadastraUser(e, nome, senha){
        e.preventDefault();
        nome = nome.trim();
        senha = senha.trim();
        
        try{
            const { data } = await api.post("/register", {nome, senha});
                console.log("Usuario cadastrado com sucesso!");
                createNotification("Usuario cadastrado com sucesso!", 'success');
                navigate("/sistema");
        }catch(e){
                console.error("Erro ao cadastrar usuario!");
                createNotification("Erro ao cadastrar usuario!", 'error');
        }
    }  

// ------------------------- Autenticação Sistema ------------------------- //

    //Login para o cliente
    async function autenticacaoAtendente(e, nome, senha) {
        e.preventDefault();
        nome = nome.trim();
        senha = senha.trim();

        try {
            const { data } = await api.post("/login", { nome, senha });
            
            localStorage.setItem("chave",data.token);
            localStorage.setItem("usuario", nome);
            api.defaults.headers.Authorization = `Bearer ${data.token}`;
            setValido(true);
            createNotification("Seja bem vindo!", 'success');
            // Redireciona explicitamente para a página do sistema após o login
            navigate("/sistema", { replace: true }); // Use 'replace: true' para substituir a entrada do histórico
            // Agora, atualize a página atual no localStorage
            localStorage.setItem("currentPage", "/sistema");
        } catch (e) {
            createNotification("Erro no login", 'error');
            console.log("Erro na autenticação" + e);
        }
    }
    
    //Login para as mesas
        async function autenticacaoMesa(e, idMesa) {
            e.preventDefault();
            idMesa = idMesa.trim();

            try {
                const { data } = await api.post("/mesa/check", { idMesa });
                navigate("/sistema");
            } catch (e) {
                console.log("Erro na autenticação" + e);
                createNotification("Erro na autenticacao!", 'error');
            }
        }


// ------------------------- Token ------------------------- //
    function validaToken() {
        const token = (localStorage.getItem("chave"));
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            api
                .post("/verifica-token")// {headers: {"Authorization": `Bearer ${token}`, "Accept": "application/json", "Content-Type": "application/json" }})
                .then((response) => {
                    setValido(true);
                    navigate("/sistema");
                })
                .catch((error) => {
                    api.defaults.headers.Authorization = undefined;
                    localStorage.removeItem("chave");
                    setValido(false);
                });
        }
    }

// ------------------------- Logout ------------------------- //
    function logout() {
        setValido(false);
        localStorage.removeItem("chave");
        // Remove o estado de autenticação
        localStorage.removeItem("autenticado"); 
        api.defaults.headers.Authorization = undefined;
        navigate("/");
    }


// ------------------------- Final da Função ------------------------- //
    useEffect(() => {
        validaToken();
    }, []);

    return (
        <MainContext.Provider
            value={{
                valido,
                autenticacaoMesa,
                validaToken,
                logout,
                autenticacaoAtendente,
                listarCategorias,
                cadastrarMesa,
                deletarMesa,
                ativarMesa,
                listarMesas,
                cadastraUser,
                listarPedidos,
                listarProdutos,
            }}
        >
            {children}
        </MainContext.Provider>
    );
}

export default MainProvider;
