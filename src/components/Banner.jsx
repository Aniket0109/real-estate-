import {
  HStack,
  VStack,
  Button,
  Text,
  Heading,
  Stack,
  Box,
  Image,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";

import { bannerData } from "../data";
import Apartment1Lg from "../assets/images/apartments/a1lg.png";
import Apartment6Lg from "../assets/images/apartments/a6lg.png";

const Banner = () => {
  return (
    <>
      <Stack direction="row" my='6' overflow='hidden'>
        <VStack
          flexGrow='1'
          px={{ sm: "6", md: "10" }}
          py={{ sm: '8',  md: "16" }}
          bg="pink.100"
          justify="center"
          align="left"
          borderRadius="xl"
        >
          <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}>
            Search Properties to rent
          </Heading>
          
          <Box pt="3" pb="8">
            <Button>Get Started</Button>
          </Box>
        </VStack>

        <VStack justify='center'>
          <Box h='100%' display={{ base: "none", lg: "block", xl:'none' }} >
            <Image
              src={Apartment1Lg}
              alt="house"
              h='100%'
              objectFit='cover'
            />
          </Box>
        </VStack>
      </Stack>
    </>
  );
};

export default Banner;
