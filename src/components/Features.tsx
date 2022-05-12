import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Stack,
} from "@chakra-ui/react";

export default function Features() {
  const Feature = (props: any) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            bg="yellow.500"
            color="white"
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color="gray.900"
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      id="quem-somos"
      bg="#F9FAFB"
      p={{base: 0, md: 20}}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={12} bg="white" rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h2
              color="brand.600"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Saiba mais
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
            >
              A melhor forma de encontrar empreendimentos
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color="gray.500"
            >
              Ajudamos o cliente na busca de empreendimentos turísticos sempre de forma transparente e com o objetivo de encontrar o negócio mais adequado ao seu perfil.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="Objetivo"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                Buscamos transformar vidas oferecendo uma forte mudança na condição econômico/financeira de pessoas que tenham interesse em atuar no mercado turístico brasileiro oferecendo  empreendimentos economicamente sustentáveis, com um custo inferior ao custo nos países europeus, buscando cidades e locais que apresentem condições propícias para o desenvolvimento de suas atividades.
              </Feature>

              <Feature
                title="Missão"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
                Encontrar no mercado brasileiro empreendimentos turísticos em locais adequados ao perfil profissional e econômico de cada empreendedor oferecendo assessoria jurídica e imobiliária em todo o território nacional, para que estes empreendedores possam então dar proseguimento a suas vidas num país maravilhoso, neutro e longe dos conflitos armamentistas da atualidade.
              </Feature>

              <Feature
                title="Baixo investimento"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
                Devido a disparidade cambial entre dólar/euro e real, propriedades e estabelecimentos comerciais podem ser adquiridos no Brasil por uma fração do valor de propriedades semelhantes em outras nações, gerando mais lucro com um capital imobilizado muito menor.
              </Feature>

              <Feature
                title="Captação de clientes"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
                Temos como foco buscar pessoas e empreendedores de outros países que acreditem no potencial turístico brasileiro para oferecer-lhes toda a assessoria necessária desde o recebimento nos nossos aeroportos com tradutores, acompanhamento e avaliação da  documentação dos imóveis/empreendimentos, dados econômico/financeiros e assessoria jurídica para se estabelecerem no Brasil.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}