import './Pedidos.css'

function Pedidos() {
    return (
    <>
        <main className='usuario-completo'>
            <div >
                <h1 className='pag-titulo-sistema fade2'>Pedidos</h1>
            </div>
            
            <div>
                <button className='btn-sistema laranja'>ID</button>
                <button className='btn-sistema laranja'>Mesa</button>
                <button className='btn-sistema laranja'>Status</button>
                <button className='btn-sistema laranja'>Total</button>
                <button className='btn-sistema laranja'>Dia</button>
                <button className='btn-sistema laranja'>Todos</button>
                <button className='btn-sistema laranja'>Data</button>
            </div>
            <div className='Pedidos-tabela'>
                <h2></h2>
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