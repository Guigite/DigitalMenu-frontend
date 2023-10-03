import './produtos.css';
function Produtos() {

  return (
    <>

      <div className='produtos-main'>
        <div>
          <h1 className='pag-titulo-sistema fade2'>Produtos</h1>
          <h2 className='txt-pesquisar-sistema'>Pesquisar</h2>
        </div>
        <div>
          <button className='btn-sistema laranja'>Nome</button>
          <button className='btn-sistema laranja'>fx preco</button>
          <button className='btn-sistema laranja'>descricao</button>
          <button className='btn-sistema laranja'>categoria</button>
          <button className='btn-sistema laranja'>status</button>
          <button className='btn-sistema laranja'>ativos</button>
        </div>
        <div className="flex-item-table">
          tabela
        </div>
        <div className='opcoes-inferior-produtos'>
          <div className='opcoes-topo-prod-esquerda'>
            <h2 className='font-opcoes-sistema'>Cadastrar</h2>
          </div>
          <div className='opcoes-topo-prod-direita'>
            <h2 className='font-opcoes-sistema'>Opções</h2>
          </div>




          <div className='opcoes-esquerda-prod font-sistema'>
            <h2>ID:</h2>
            <h2>NOME:</h2>
            <h2>CATEGORIA:</h2>
            <h2>DESCRIÇÃO:</h2>
          </div>


          <div className='opcoes-esquerda-prod2'>
            <input className='tamanho-input-prod' type="text" placeholder='ID' />
            <input className='tamanho-input-prod' type="text" placeholder='Nome' />

          </div>

          <div className='opcoes-esquerda-prod3'>
            <select name="categoria" id="categoria">
              <option value="">Escolha uma categoria</option>
              <option value="nomecategoria">categoria</option>
            </select>
            <input type="text" placeholder='Descrição' />
          </div>


          <div className='opcoes-esquerda-prod4 font-sistema'>
            <h2>PREÇO:</h2>
            <input type="text" placeholder='Preço' />
          </div>

          <div className='opcoes-esquerda-baixo-prod'>
            <button className='btn-cadastrar-prod laranja'>Cadastrar</button>
          </div>






          <div className='opcoes-direita-prod'>
            <div className='atualizar-prod'>
              <button className='btn-sistema laranja'>Atualizar</button>
            </div>
            <div>
              <button className='btn-sistema laranja'>Desativar</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )

}
export default Produtos;


