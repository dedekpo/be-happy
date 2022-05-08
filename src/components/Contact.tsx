import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem
  } from '@chakra-ui/react';
  import {
    MdEmail,
    MdLocationOn
  } from 'react-icons/md';
  import { BsFacebook, BsYoutube } from 'react-icons/bs'; 
  import { AiFillInstagram } from 'react-icons/ai';
  import { IoLogoWhatsapp } from 'react-icons/io';
  
  export default function Contact() {
    return (
      <Container size='lg' maxW="full" mt={0} centerContent overflow="hidden" id='contact'>
        <Flex>
          <Box
            shadow='md'
            color="gray.800"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem >
                  <VStack>
                    <Heading textAlign='center'>Contato</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500" textAlign='center'>
                      Quer anunciar seu imóvel ou entrar em contato com os nossos atendentes?
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="center">
                        <Button
                          as='a'
                          href='https://api.whatsapp.com/send?phone=5531985067540&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Be%20Happy'
                          target='_blank'
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="gray.800"
                          leftIcon={<IoLogoWhatsapp color="#D69E2E" size="20px" />}>
                          +55 31 98506-7540
                        </Button>
                        <Button
                          as='a'
                          href='mailto: behappybrazil11@gmail.com'
                          size="md"
                          height="48px"
                          width="270px"
                          variant="ghost"
                          color="gray.800"
                          leftIcon={<MdEmail color="#D69E2E" size="20px" />}>
                          behappybrazil11@gmail.com
                        </Button>
                        <Button
                          as='text'
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="gray.800"
                          leftIcon={<MdLocationOn color="#D69E2E" size="20px" />}>
                          Betim, Brasil
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="center">
                    <IconButton
                        as='a'
                        href='https://www.facebook.com/behappybrazil/'
                        target='_blank'
                        aria-label="Facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#D69E2E' }}
                        icon={<BsFacebook size="28px" />}
                      />
                      <IconButton
                        as='a'
                        href='https://www.instagram.com/behappybrazil/'
                        target='_blank'
                        aria-label="Instagram"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#D69E2E' }}
                        icon={<AiFillInstagram size="34px" />}
                      />
                    </HStack>
                  </VStack>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }