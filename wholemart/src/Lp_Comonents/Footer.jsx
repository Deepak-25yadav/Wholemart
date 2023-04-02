
import { Box, Flex, Icon, IconButton, Link, Stack, Text } from "@chakra-ui/react"
import { FaAppStore, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <Box as="footer" bg="gray.50" py="10" px={{ base: "4", md: "8" }}>
      <Box maxW="7xl" mx="auto">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "10", lg: "28" }}
          justify={{ lg: "space-between" }}
          align={{ lg: "center" }}
        >
          <Box flex="1">
            <Text fontSize="lg" fontWeight="semibold" mb="2">
             Whole Mart Community
            </Text>
            <Text fontSize="sm" color="gray.600">
          <Text>  Shop with confidence - your satisfaction is our top priority.</Text>
          <Text>Discover the best deals on the latest products at our online store.</Text>
          <Text>Your one-stop-shop for all your shopping needs.</Text>
          <Text>Fast and reliable shipping to your doorstep.</Text>
          <Text>Find exactly what you're looking for with our easy-to-use search function.</Text>
          <Text>Shop now and enjoy exclusive discounts and promotions.</Text>





We believe in quality and affordability for all our customers.
Your feedback matters - please let us know how we can improve your shopping experience.
Stay updated on new arrivals and promotions by subscribing to our newsletter.
Thank you for choosing us - we appreciate your business!
            </Text>
          </Box>
          <Stack direction="row" spacing="6">
            <Link href="#" title="Download on the App Store" isExternal>
              <Icon as={FaAppStore} boxSize="10" color="gray.600" />
            </Link>
            <Link href="#" title="Follow us on Facebook" isExternal>
              <Icon as={FaFacebook} boxSize="6" color="gray.600" />
            </Link>
            <Link href="#" title="Follow us on Instagram" isExternal>
              <Icon as={FaInstagram} boxSize="6" color="gray.600" />
            </Link>
            <Link href="#" title="Follow us on Twitter" isExternal>
              <Icon as={FaTwitter} boxSize="6" color="gray.600" />
            </Link>
          </Stack>
        </Stack>
        <Box
          borderTopWidth="1px"
          borderTopColor="gray.200"
          mt="10"
          pt="8"
          pb={{ base: "10", md: "8" }}
          fontSize="sm"
          color="gray.600"
          display={{ md: "flex" }}
          justifyContent={{ md: "space-between" }}
          alignItems={{ md: "center" }}
          flexWrap="wrap"
        >
          <Text>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</Text>
          <Flex direction={{ base: "column", md: "row" }} spacing={{ base: "2", md: "8" }}>
            <Link href="#" title="Privacy Policy">
              Privacy Policy
            </Link>
            <Link href="#" title="Terms of Use">
              Terms of Use
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer