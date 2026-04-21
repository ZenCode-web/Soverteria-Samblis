import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
 

  return (
    <>
      <Header/>
         <main className="bg-background pt-20 lg:pt-22">
            <Outlet/>
         </main>
      <Footer/>
    </>
  )
}

export default App
