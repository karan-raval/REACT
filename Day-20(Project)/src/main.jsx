import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Provider } from 'react-redux'
// import { store } from './Redux/store';
import {BrowserRouter} from "react-router-dom"
import {ChakraProvider, extendTheme} from "@chakra-ui/react"


createRoot(document.getElementById('root')).render(
  <ChakraProvider >
  <BrowserRouter>
  {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
    </BrowserRouter>
    </ChakraProvider>
)
