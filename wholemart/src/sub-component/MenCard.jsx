import { Box, Image,Heading, Text, Center, Button} from "@chakra-ui/react";


function MenCard(props){

const {brand,price,image,title}=props
// console.log("brand",brand)
// console.log("price",price)
// console.log("title",title)

return<Box margin="auto" textAlign="center" bg="gray.100" width="90%" boxShadow="10px" borderRadius="4px">
   
   <Image src={image} width="100%"/>
   <Heading as='h6' size='base'>
    {brand}
  </Heading>
  <Text>{title}</Text>
  <Text>Rs. {price}</Text>
  <Button bg={{base:"blue.400",sm:"teal.200",md:"red.200",lg:"blue.100"}}>Add to cart</Button>
 





</Box>

}
export default MenCard;