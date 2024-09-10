import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contaxtapi from './Components/Contaxtapi.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Contaxtapi>
    <App />
  </Contaxtapi>
  </>,
)
