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
                <h2 className='font-opcoes-sistema'>Dados</h2>
            </div>
                    
            <div className="final">
                <section className="final-divisao">

                    <div className="final-divisao-esquerda">
                        
                        <span className='id-margem font-sistema-span'>ID:<input type="text" /></span>
                        <span className='font-sistema-span'>Mesa:<input type="text" /></span>
                        <span className='status-margem font-sistema-span'>Status:<input type="text" /></span>
                    </div>
                    <div className="final-divisao-esquerda-interna">
                        <span className='font-sistema-span'>TOTAL:<input type="text" /></span>
                        <span className='data-margem font-sistema-span'>Data:<input type="text" /></span>
                        <button className='btn-sistema laranja btn-cadastrar-usuario'>Ver itens</button>
                    </div>
                </section>
                
                <div className="final-divisao-direita">
                    <h2 className='opcoes-margem font-opcoes-sistema'>Opções</h2>
                    <button className='btn-sistema laranja btn-cadastrar-usuario'>Alterar Status</button>
                    <button className='btn-sistema laranja btn-cadastrar-usuario'>Abrir Pedido</button>
                </div>
            </div>

        </main>
    </>
    )
}

export default Pedidos;