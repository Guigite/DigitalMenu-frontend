import { useContext, useEffect,useState } from 'react';
import { createPortal } from "react-dom";
import { Modal } from '../modelPopUp/modal';
import './relatorio.css';
import { MainContext } from '../../context/context';
import { DataGrid } from '@mui/x-data-grid';
import localePTBR from '../../util/locale';

function Relatorio() {
    const {listarItensMaisVendidos} = useContext(MainContext);
    const [data, setData] = useState([]);
    /* Abre o popup */
    const [modalOpen, setModalOpen] = useState(false);
    /* Recebe mensagem do model*/
    const [message, setMessage] = useState("");
    /* Fecha o popup caso qualquer botão for clicado e seta mensagem*/
    const handleButtonClick = (value) => {
        setModalOpen(false)
        setMessage(value)
    };

    useEffect(() => {
        listarItensMaisVendidos().then((resp) => {
          setData(resp);
        });
      }, []);
      
      const colunmRelatorio = [
        {
            field: "idproduto",
            headerName: "ID Produto",
            flex: 0.2,
            minWidth: 100,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
          },
          {
            field: "nome",
            headerName: "Nome",
            flex: 0.2,
            minWidth: 100,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
          },
          {
            field: "preco",
            headerName: "Preço",
            flex: 0.2,
            minWidth: 50,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
          },
          {
            field: "qtdeTotal",
            headerName: "Quantidade Vendida",
            flex: 0.2,
            minWidth: 200,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
          },
          {
            field: "valorTotal",
            headerName: "Valor total",
            flex: 0.2,
            minWidth: 210,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
          }
    ] 
    
    const getRowId = (row) =>{
        return row.idproduto;
    }

    return (
        <>
            <div className='relatorio-main'>
                <div className='relatorio-topo '>
                    <div>
                        <h1 className='pag-titulo-sistema fade2'>Relatório</h1>
                        <h2 className='text-topRelatorio'>Top produtos mais vendidos</h2>
                    </div>
                    <div className="relatorio-tabelaSup">
                        
                    </div>
                </div>
                <div className='relatorio-below'>
                    <h2 className='txt-pesquisar-sistema'>Pesquisar</h2>
                    <div>
                        <button className='btn-sistema laranja'>Produtos mais faturado</button>
                        <button className='btn-sistema laranja'>Produtos mais vendidos</button>
                        <button className='btn-sistema laranja'>Total pedidos</button>
                        <button className='btn-sistema laranja'>Gorjetas</button>
                        <button className='btn-sistema laranja' onClick={() => setModalOpen(true)}>Total Pedidos Mês
                        </button>
                        {modalOpen && (
                            createPortal(<Modal
                                onSubmit={handleButtonClick}
                                onCancel={handleButtonClick}
                                onClose={handleButtonClick}
                            >
                                {/*   essa área pode ser alterada */}
                                <h2 className='tituloPopUp'>Esse é o titulo</h2>
                                <p>Essa área pode ser alterada</p>
                                <h2>(colocar combo box dos meses aqui)</h2>

                            </Modal>, document.body)
                        )}
                    </div>
                    <div className='relatorio-tabelaInf'>
                    <DataGrid
                            columns={colunmRelatorio}
                            rows={data}
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
                </div>
            </div>

        </>
    )
}
export default Relatorio;