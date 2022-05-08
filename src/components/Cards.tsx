import React from "react";
import { Box, Flex, Image, Badge, useColorModeValue, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
const Cards = () => {

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Casa com piscina",
    beds: 3,
    baths: 2,
    title: "Casa moderna no centro da cidade de Belo Horizonte",
    formattedPrice: "R$1,900.00",
  };

  return (
      <>
        <Text as='h1' bg='#F9FAFB' textAlign='center' fontSize='3xl' fontWeight='bold' pt={10} id='oportunidades'>Oportunidades</Text>
        <Text as='h2' bg='#F9FAFB' textAlign='center' fontWeight='thin'>Flats, bares, cafés, hotéis, motéis, hostels, resorts, terrenos, campings, pousadas, condo-hotéis, restaurantes, casas de show, salões de eventos e muito mais.</Text>
        <Flex
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={50}
            gap={3}
            w="full"
            direction={{base: 'column', md: 'row'}}
            alignItems="center"
            justifyContent="center"
        >
            <Box
                bg={useColorModeValue("white", "gray.800")}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
            >
                <Image
                src={property.imageUrl}
                alt={property.imageAlt}
                roundedTop="lg"
                />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            >
                            {property.beds} beds &bull; {property.baths} baths
                        </Box>
                    </Box>

                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {property.title}
                    </Box>

                    <Box>
                        {property.formattedPrice}
                    </Box>
                </Box>
            </Box>
            <Box
                bg={useColorModeValue("white", "gray.800")}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
            >
                <Image
                src={property.imageUrl}
                alt={property.imageAlt}
                roundedTop="lg"
                />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            >
                            {property.beds} beds &bull; {property.baths} baths
                        </Box>
                    </Box>

                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {property.title}
                    </Box>

                    <Box>
                        {property.formattedPrice}
                    </Box>
                </Box>
            </Box>
            <Box
                bg={useColorModeValue("white", "gray.800")}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
            >
                <Image
                src={property.imageUrl}
                alt={property.imageAlt}
                roundedTop="lg"
                />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            >
                            {property.beds} beds &bull; {property.baths} baths
                        </Box>
                    </Box>

                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {property.title}
                    </Box>

                    <Box>
                        {property.formattedPrice}
                    </Box>
                </Box>
            </Box>
        </Flex>
    </>
  );
};

export default Cards;