import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Image
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Be Happy"
              display="flex"
              alignItems="center"
            >
              <Image src='/logo.png' h='50px'></Image>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Be Happy
              </chakra.h1>
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button as='a' href="#quem-somos" variant="ghost">Quem somos</Button>
              <Button variant="ghost" as='a' href="#oportunidades">Oportunidades</Button>
              <Button variant="ghost" as='a' href="#contact">Contato</Button>
            </HStack>
            <Button as='a' href="/imoveis" bgColor='yellow.500' color='white' _hover={{ bg: "yellow.400" }}>
              Imóveis
            </Button>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}