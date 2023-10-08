import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../context/context';
import { DataGrid } from '@mui/x-data-grid';
import localePTBR from '../../util/locale';
import './Pedidos.css'

function Pedidos() {
    
    const {listarPedidos} = useContext(MainContext);
    
    const [pedidios, setPedidos] = useState([]);
    
    useEffect(() => {
        listarPedidos().then((resp) => {
          setPedidos(resp);
        });
      }, []);
    
    const colunmPedidos = [
        {
            field: "idpedido",
            headerName: "ID Pedido",
            minWidth: 100,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
        },
        {
            field: "total",
            headerName: "Total",
            minWidth: 100,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
        },
        {
            field: "data",
            headerName: "Data",
            minWidth: 130,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
        },
        {
            field: "status",
            headerName: "Status do Pedido",
            minWidth: 200,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
        },
        {
            field: "id_mesa",
            headerName: "Pedido da Mesa:",
            minWidth: 200,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
        }
    ]

    const getRowId = (row) => {
        return row.idpedido;
      };
    
    return (
    <>
        <main className='usuario-completo'>
            <div >
                <h1 className='pag-titulo-sistema fade2'>Pedidos</h1>
            </div>
            <div className='Pedidos-tabela'>
                <DataGrid
                    columns={colunmPedidos}
                    rows={pedidios}
                    getRowId={getRowId}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                        }}
                    pageSizeOptions={[5, 10]}
                    localeText={localePTBR}
                />
            </div>
            <div className='Dados-margem'>
                <h2 className='font-opcoes-sistema'>Controle de Pedidos</h2>
            </div>
            <div className="final">
                <section className="final-divisao">
                    <div className="final-divisao-esquerda-interna">
                        <button className='btn-sistema laranja btn-cadastrar-usuario'>Ver itens</button>
                        <button className='btn-sistema laranja btn-cadastrar-usuario'>Alterar Status</button>
                        <button className='btn-sistema laranja btn-cadastrar-usuario'>Abrir Pedido</button>
                    </div>
                </section>
            </div>
        </main>
    </>
    )
}

export default Pedidos;