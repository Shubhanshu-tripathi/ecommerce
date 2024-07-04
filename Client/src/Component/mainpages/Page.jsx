import { Route, Routes } from "react-router-dom"
import Product from "./Products/product"
import Login from "./Login/login"
import Register from "./Login/register"
import Cart from "./Cart/Cart"
function Page() {
    
    return (<>
      
        <Routes>
            <Route path="/" element={<Product/>} />
            <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register/>} />
              <Route path="/cart" element={<Cart/>} />
           </Routes>
          
    </>)


}

export default Page