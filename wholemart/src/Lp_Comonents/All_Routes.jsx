import {Routes,Route} from "react-router-dom"
import Home from "../Components/Home";
import Men from "../Components/Men";
import Women from "../Components/Women";
import Kids from "../Components/Kids";
import Beauty from "../Components/Beauty";
import Login from "../Components/Login";
import Cart from "../Components/Cart";
import Payment from "../Components/Payment";

function All_Routes(){

return(<div>
     <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/men" element={<Men/>}/>
           <Route path="/women" element={<Women/>}/>
           <Route path="/kids" element={<Kids/>}/>
           <Route path="/beauty" element={<Beauty/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/payment" element={<Payment/>}/>
           
        </Routes>
</div>)

}

export default All_Routes;