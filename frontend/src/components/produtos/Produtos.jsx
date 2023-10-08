import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../context/context';
import { DataGrid } from '@mui/x-data-grid';
import localePTBR from '../../util/locale';
import './produtos.css';

function Produtos() {

  const {listarProdutos} = useContext(MainContext);

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    listarProdutos().then((resp) => {
      setProdutos(resp);
    });
  }, []);

  const colunmProdutos = [
    {
        field: "idproduto",
        headerName: "ID Produto",
        minWidth: 90,
        hideable: false,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
    },
    {
        field: "nome",
        headerName: "Nome",
        minWidth: 100,
        hideable: false,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
    },
    {
        field: "descricao",
        headerName: "Descrição",
        minWidth: 250,
        hideable: false,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
    },
    {
        field: "preco",
        headerName: "Preço",
        minWidth: 50,
        hideable: false,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
    },
    {
        field: "status",
        headerName: "Status do Produto",
        minWidth: 150,
        hideable: false,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
    },
    {
        field: "id_categoria",
        headerName: "Categoria do Pedido",
        minWidth: 150,
        hideable: false,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
    }
  ]

  const getRowId = (row) =>{
    return row.idproduto;
  }

  return (
    <>

      <div className='produtos-main'>
        <div>
          <h1 className='pag-titulo-sistema fade2'>Produtos</h1>
        </div>
        <div className="flex-item-table">
          <DataGrid
              columns={colunmProdutos}
              rows={produtos}
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
        <div className='opcoes-inferior-produtos'>
          <div className='opcoes-topo-prod-esquerda'>
            <h2 className='font-opcoes-sistema'>Cadastrar</h2>
          </div>
          <div className='opcoes-esquerda-baixo-prod'>
            <button className='btn-cadastrar-prod laranja'>Cadastrar</button>
            <button className='btn-sistema laranja'>Atualizar</button>
            <button className='btn-sistema laranja'>Desativar</button>
          </div>
        </div>
      </div>
    </>
  )

}
export default Produtos;


