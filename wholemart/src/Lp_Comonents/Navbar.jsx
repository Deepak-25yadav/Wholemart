


import { Box, Image, Input} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import logo from "./wholemart_logo.png";
import { AiOutlineUserAdd,AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";






function Navbar(){

const [text,setText]=useState("")

 const handleChange=(e)=>{
  setText(e.target.value)
  
  // search(text)
}








    return(<Box bg="gray.400" display={{lg:"grid",md:"flex",sm:"flex",base:"flex"}} gridTemplateColumns={{lg:"repeat(4,1fr)",md:"repear(3,1fr)",base:"repeat(1,1fr)"}} width="100%" height="100%" margin="auto" padding="10px">

       <Box bg="white"><Link to="/"><Image src={logo} width={{lg:"100%",md:"30%",sm:"30%",base:"25%"}}/></Link></Box>

         <Box display="flex" justifyContent="space-around" justify-Content="center" textAlign="center" width="500px" bg="white">

         <Box><Link to="/" >Home</Link></Box>
         <Box><Link to="/men" >Men </Link></Box>
         <Box><Link to="/women" >Women</Link></Box>
         <Box><Link to="/kids" >Kids </Link></Box>
         <Box><Link to="/beauty" > Beauty </Link></Box>

         </Box>

         {/* <Link to="/" >Home</Link> */}
{/* <Link to="/men" >Men Page</Link> */}
{/* <Link to="/women" >Women</Link> */}
{/* <Link to="/kids" >Kids Page</Link> */}
{/* <Link to="/beauty" > Beauty Page</Link> */}

         <Box bg="white" width={{lg:"100%",md:"30%",sm:"30%",base:"25%"}} ><Input bg="gray.100" value={text} onChange={handleChange} placeholder="Search here products"  /></Box>

         <Box bg="white" display={{base:"grid"}} gridTemplateColumns={{base:"repeat(2,1fr)"}}>

         <Box display={{base:"flex"}}>
         <Link to="/login"><AiOutlineUserAdd style={{width:"50px",height:"30px"}}/></Link>
          <Link to="/cart"><AiOutlineShoppingCart style={{width:"50px",height:"30px"}} /></Link></Box>
         {/* <Box bg="red">/></Box> */}
         </Box>


    </Box>)
}
export default Navbar;

