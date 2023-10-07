import { useState, useContext, useEffect} from 'react';
import './Mesa.css';
import { MainContext } from '../../context/context';
import { toast, ToastContainer } from 'react-toastify';
import { DataGrid } from '@mui/x-data-grid';




function Mesa() {

    const {cadastrarMesa, deletarMesa, ativarMesa, listarMesas} = useContext(MainContext);

    const [mesas, setMesas] = useState([])
    const [idMesa, setIdMesa] = useState("");

    useEffect(() => {
        listarMesas().then((resp) => {
          setMesas(resp);
        });
      }), [];
      
      const colunmMesa = [
        {
            field: "idmesa",
            headerName: "Número da Mesa",
            flex: 0.2,
            minWidth: 210,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
          },
          {
            field: "status",
            headerName: "Status da Mesa",
            flex: 0.2,
            minWidth: 210,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
          },
    ]

    const getRowId = (row) => {
        return row.idmesa;
      };

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
                    {/* {JSON.stringify(mesas)} */}
                    <DataGrid
                        columns={colunmMesa}
                        rows={mesas}
                        getRowId={getRowId}
                        initialState={{
                            pagination: {
                              paginationModel: { page: 0, pageSize: 5 },
                            },
                          }}
                          pageSizeOptions={[5, 10]}
                    />
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
           
        </>
    )

}
export default Mesa;