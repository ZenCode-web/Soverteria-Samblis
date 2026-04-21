import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Main from './pages/Main/index.jsx'
import NotFound from './pages/NotFound/index.jsx'
import SorvetesEgelados from './pages/Sorvetes-e-gelados/index.jsx'
import AcaiEmilkShake from './pages/Acai-e-milk-shake/index.jsx'
import LanchesEpratos from './pages/Lanches-e-pratos/index.jsx'
import SalgadinhosEpipocas from './pages/Salgadinhos-e-pipocas/index.jsx'
import SaladaDeFrutasEdoces from './pages/Salada-de-frutas-e-doces/index.jsx'
import BebidasQuentes from './pages/Bebidas-quentes/index.jsx'
import BebidasGeladas from './pages/Bebidas-geladas/index.jsx'

const router = createBrowserRouter([
   {
     path: "/",
     element: <App/>,
     children: [
      {index:true, element: <Main/>},
      {path: "/sorvetes-e-gelados", element: <SorvetesEgelados/>},
      {path:"/acai-e-milk-shake", element:<AcaiEmilkShake/>},
      {path:"/lanches-e-pratos", element:<LanchesEpratos/>},
      {path:"/salgadinhos-e-pipocas", element:<SalgadinhosEpipocas/>},
      {path:"/salada-de-frutas-e-doces", element:<SaladaDeFrutasEdoces/>},
      {path:"/bebidas-quentes", element:<BebidasQuentes/>},
      {path:"/bebidas-geladas", element:<BebidasGeladas/>}
     ]
   },
   {
     path: "*", element: <NotFound/>
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
       <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)
