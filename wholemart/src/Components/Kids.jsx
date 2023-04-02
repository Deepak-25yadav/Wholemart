// import { Box } from "@chakra-ui/react";

import { Box, Button, Divider, Image, Text, Select, FormLabel, Spacer, Checkbox, Input } from "@chakra-ui/react"
import { useState, useEffect, useReducer } from "react";
import axios from "axios"
import MenCard from "../sub-component/MenCard";
// import Pagination from "../Functionality/Pagination";
import { SimpleSlider } from "./Home";


const initState = { lte: 1000, gte: 10, Range1: false, Range2: false, Range3: false }

const reducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {

        case "FirstRange": {
            return { ...state, lte: 100, gte: 300, Range1: !state.Range1, Range2: false, Range3: false }
        }
        case "SecondRange": {
            return { ...state, lte: 301, gte: 600, Range1: false, Range2: !state.Range2, Range3: false }
        }
        case "ThirdRange": {
            return { ...state, lte: 601, gte: 1000, Range1: false, Range2: false, Range3: !state.Range3 }
        }
    }

}





function Kids(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [order, setOrder] = useState("")
    const [filterbyBrand, setFilterbyBrand] = useState("")
    const [filterbyCloth, setFilterbyCloth] = useState("")
    const [state, dispatch] = useReducer(reducer, initState)
    const [search,setSearch]=useState("");

   

    useEffect(() => {  // useEffect for UI  opening curly Bracket


        let obj = {}

        if (page) {
            obj._page = page
            obj._limit = 12
        }

        if (order) {
            obj._sort = "price"
            obj._order = order
        }
        if (filterbyBrand) {
            obj.brand = filterbyBrand
        }
        if (filterbyCloth) {
            obj.title = filterbyCloth
        }
        if(search){
            obj.q=search
        }
       
        // if(state){

        //     obj.price_lte=state.lte
        //     obj.price_gte=state.gte
        // }

        const url = `https://filthy-frog-pants.cyclic.app/kids`
        getData(url, obj)

    }, [page, order, filterbyBrand, filterbyCloth,search])      // // useEffect for UI  Closing curly Bracket


    console.log("State of dispatch type", state)





    const getData = async (url, obj) => {  // Opening curly bracket of getData
        try {
            console.log("object in side getData function", obj)
            const res = await axios.get(url, { params: obj })
            setData(res.data);

            console.log("totalDatalength", res.data.length)
            console.log(res)

        } catch (error) { console.log(error) }

    }    // closing curly bracket of getData



    // for finding pagination last limit we have done below this process
    useEffect(() => {
        let url = `https://filthy-frog-pants.cyclic.app/kids`
        getTotalDataLength(url)

    }, [])

    const getTotalDataLength = async (url) => {
        try {
            const res = await axios.get(url)
            setTotalPage(Math.ceil(res.data.length / 12))
        } catch (error) { console.log(error) }

    }  // for finding pagination last limit we have done above this process





console.log("search text at men page",search)

    console.log(data)









    return(<Box>


<Box padding="10px"><SimpleSlider/></Box>
             
             <Box bg="gray.100" width="70%" display="block" justifyContent="center" margin="20px 10px 0px 180px" borderRadius="30px" >
                <Box borderRadius="20px" bg="gray.100" width="100%"><Input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search men's product here"/></Box>
             </Box>

        <Box margin="15px" display="grid" gridTemplateColumns="15% 85%" bg="yellow">

            <Box bg={{ base: "gray.200" }} width="100%"> {/* functionality block box */}


                <Box border="solid 2px black" bg="white" margin="1opx">

                    <Text>Sorting by Price</Text>
                    <Box margin="5px"><Button width="100%" border="2px solid black" onClick={() => setOrder("asc")}>Low to High</Button></Box>
                    <Box margin="5px"><Button width="100%" border="2px solid black" onClick={() => setOrder("desc")}>High to Low</Button></Box>
                    <Box margin="5px"><Button width="100%" border="2px solid black" onClick={() => setOrder("")}>Reset Price</Button></Box>

                </Box>

                <Box border="solid 2px black" bg="white" >
                    <Text>Filter by Brand</Text>
                    <Box>
                        <Select onChange={(e) => setFilterbyBrand(e.target.value)}>
                            <option value="">All Brand</option>
                            <option value="Puma">Puma</option>
                            <option value="Wrong">Wrong</option>
                            <option value="Campus">Campus</option>
                            <option value="Adidas">Adidas</option>
                            <option value="Roadster">Roadster</option>
                        </Select>
                    </Box>
                </Box>

                <Box border="solid 2px black" bg="white">
                    <Text>Filter by Clothes</Text>
                    <Box>
                        <Select onChange={(e) => setFilterbyCloth(e.target.value)}>
                            <option value="">All Clothes</option>
                            <option value="Jacket">Jacket</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Kurtas">Kurtas</option>
                            <option value="Jeans">Jeans</option>
                            <option value="Shirt">Shirt</option>
                            <option value="T-Shirt">T-Shirt</option>

                        </Select>
                    </Box>
                </Box>



                <Box border="solid 2px black" bg="white" >

                    <Box>
                        <FormLabel>
                            <Checkbox isDisabled={state.Range3 || state.Range2} onChange={() => dispatch({ type: "FirstRange" })}>Rs. 100 - Rs. 300</Checkbox>
                        </FormLabel>
                    </Box>

                    <Box>
                        <FormLabel>
                            <Checkbox isDisabled={state.Range3 || state.Range1} onChange={() => dispatch({ type: "SecondRange" })}>Rs. 301 - Rs. 600</Checkbox>
                        </FormLabel>
                    </Box>

                    <Box>
                        <FormLabel>
                            <Checkbox isDisabled={state.Range1 || state.Range2} onChange={() => dispatch({ type: "ThirdRange" })}>Rs. 601 - Rs. 1000</Checkbox>
                        </FormLabel>
                    </Box>

                </Box>


            </Box>


            <Box bg={{ base: "pink.100", sm: "grey", md: "teal.100", lg: "White" }} width="100%" display="grid" gridTemplateColumns={{ base: "repeat(1,1fr)", sm: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(4,1fr)" }}
                gap={{ base: "16px" }}>
                {data.map((item) => <MenCard kye={item.id} {...item} />)}

            </Box>

        </Box>

        <Button isDisabled={page == 1} onClick={() => setPage(page - 1)}>Prev</Button>
        <Button>{page}</Button>
        <Button isDisabled={totalPage === page} onClick={() => setPage(page + 1)}>Next</Button>
        {/* <Pagination  totalPages={totalPage} currentPage={page} handlePageChange={handleChange}/> */}












        {/* <h1>Kids component page </h1> */}
    </Box>)

}

export default Kids;