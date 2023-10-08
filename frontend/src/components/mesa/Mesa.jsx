import { useState, useContext, useEffect} from 'react';
import './Mesa.css';
import { MainContext } from '../../context/context';
import { toast, ToastContainer } from 'react-toastify';
import { DataGrid } from '@mui/x-data-grid';




function Mesa() {

    const {cadastrarMesa, deletarMesa, ativarMesa, listarMesas} = useContext(MainContext);

    const [mesas, setMesas] = useState([])
    const [idMesa, setIdMesa] = useState({});

    useEffect(() => {
        listarMesas().then((resp) => {
          setMesas(resp);
        });
      }), [idMesa];
      
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
        //   {
        //     field: "actions",
        //     headerName: "Ações",
        //     type: "actions",
        //     flex: 0.2,
        //     minWidth: 210,
        //     hideable: false,
        //     renderCell: (params) => (
        //         <div>
        //             <button className='btn-sistema laranja'
        //                 onClick={(e)=> {
        //                     setIdMesa(params.row.idmesa);
        //                     // console.log(params.row.idmesa)
        //                     console.log(idMesa)
        //                     deletarMesa(e, idMesa);
        //                 }}
        //             >
        //             Desativar
        //             </button>
        //             <button className='btn-sistema laranja'
        //                 onClick={(e) => {
        //                     setIdMesa(params.row.idmesa);
        //                     // console.log(params.row.idmesa)
        //                     console.log(idMesa)
        //                     ativarMesa(e, idMesa) 
        //                 }}
        //             >
        //             Ativar
        //             </button>
        //         </div>
        //     ),
        //     renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
        //   },
    ]

    const getRowId = (row) => {
        return row.idmesa;
      };

    return (
        <>

            <div className="mesa-main">
                <h1 className='pag-titulo-sistema fade2'>Mesas</h1>
                <div className="mesa-tabela">
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
                        <h2 className='font-opcoes-sistema'>Controle de Mesas</h2>
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
                        onClick={(e)=> cadastrarMesa(e, idMesa)}
                        >
                            Cadastrar
                        </button>
                        <button className='btn-sistema laranja'
                            onClick={(e)=> {
                                setIdMesa(idMesa);
                                // console.log(params.row.idmesa)
                                console.log(idMesa)
                                deletarMesa(e, idMesa);
                            }}
                        >
                            Desativar
                        </button>
                        <button className='btn-sistema laranja'
                            onClick={(e) => {
                                setIdMesa(idMesa);
                                // console.log(params.row.idmesa)
                                console.log(idMesa)
                                ativarMesa(e, idMesa) 
                            }}
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