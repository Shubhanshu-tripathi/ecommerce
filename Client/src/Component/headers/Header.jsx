import { ImMenu } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";

import './header.css';

function Header() {
    
    return (<>
      
        <header className="menu"  >  
        <ImMenu /> 
        <div className="logo" >
            <h1>
                  <a href="">30dc Shop</a>
            </h1>
        </div>
        <ul>
               <a href="">Products</a>

            <li> <a href="">Login or Register</a>  </li>
            <li> <MdOutlineClose /> </li>
        </ul>

         
        <div className="Cart">
           <span>0</span> 
        <FaCartArrowDown /> 
          </div>

        </header>
        
    
    </>)

}

export default Header