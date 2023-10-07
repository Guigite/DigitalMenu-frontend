import Rotas from "./routes"
import { toast, ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <>
      <Rotas />
      <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
            />
    </>
  )
}

export default App
