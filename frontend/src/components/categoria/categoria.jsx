import { useContext, useEffect, useState } from 'react';
import './categoria.css';
import { MainContext } from '../../context/context';
import { DataGrid } from '@mui/x-data-grid';
import localePTBR from '../../util/locale';

function Categoria() {
    const{listarCategorias} = useContext(MainContext);
    const [categorias, setCategorias] = useState([]);
    const[idCategoria,setIdCategoria] = useState("");

    useEffect(() => {
        listarCategorias().then((resp) =>{
            setCategorias(resp);
        });
    },[]);

    const colunmCategorias=[
        {
            field:"idcategoria",
            headerName: "ID Categoria",
            flex: 0.2,
            minWidht:210,
            hideable:false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>, 
        },
        {
            field: "nome",
            headerName: "Nome",
            flex: 0.2,
            minWidth: 210,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,   
        },
        {
        field: "status",
            headerName: "Status da Categoria",
            flex: 0.2,
            minWidth: 210,
            hideable: false,
            renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
        },
    ]

    const getRowId = (row) =>{
        return row.idcategoria
    };

    return (
        <>
            <div className="categoria-main">
                <div className="areaCategoria">
                    <h1 className="pag-titulo-sistema fade2">Categoria</h1>
                    <h2 className='txt-pesquisar-sistema'>Pesquisar</h2>
                    <div className="areaCategoria__areaTabela">
                        <DataGrid
                            columns={colunmCategorias}
                            rows={categorias}
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
                    <div className="areaCategoria__areaDados">
                        <div className="areaCategoria__areaDados__areaCadastro">
                            <h2 className="font-opcoes-sistema">Cadastrar Categoria</h2>
                            <div className="areaCategoria__areaDados__areaCadastro__areaInput">
                                <p className="areaCategoria__areaDados__areaCadastro__areaInput__ID font-sistema-span">ID:</p>
                                <input type="text" className="areaCategoria__areaDados__areaCadastro__areaInput__input id" />
                            </div>
                            <div className="areaCategoria__areaDados__areaCadastro__areaInput">
                                <p className="areaCategoria__areaDados__areaCadastro__areaInput__NOME font-sistema-span">NOME:</p>
                                <input type="text" className="areaCategoria__areaDados__areaCadastro__areaInput__input" />
                            </div>
                        </div>
                        <div className="areaCategoria__areaDados__areaAlteracoes">
                            <h2 className='font-opcoes-sistema'>Alterar Categoria</h2>
                            <div className="areaCategoria__areaDados__areaAlteracoes__botoes">
                                <button className="btn-sistema laranja">Alterar</button>
                                <button className="btn-sistema laranja">Deletar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Categoria;
