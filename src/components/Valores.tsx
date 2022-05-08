import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
    IoChatbubblesSharp,
    IoBulbSharp,
    IoPeopleSharp,
    IoRibbonSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Valores() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'yellow.500'}
              fontWeight={600}
              fontSize={'sm'}
              bg='gray.100'
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Nossos valores
            </Text>
            <Heading>Tudo que você procura em um só lugar</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Na Be Happy o que importa é a satisfação dos nossos clientes. Estamos satisfeitos com o cliente satisfeito.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Comprometimento com soluções'}
              />
              <Feature
                icon={<Icon as={IoChatbubblesSharp} color={'yellow.500'} w={5} h={5} />}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Ética total em cada negociação'}
              />
              <Feature
                icon={<Icon as={IoBulbSharp} color={'yellow.500'} w={5} h={5} />}
                iconBg='yellow.100'
                text={'Modernidade nos processos'}
              />
              <Feature
                icon={<Icon as={IoPeopleSharp} color={'yellow.500'} w={5} h={5} />}
                iconBg='yellow.100'
                text={'Parceria e respeito com cada ator'}
              />
              <Feature
                icon={<Icon as={IoRibbonSharp} color={'yellow.500'} w={5} h={5} />}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Transparência em todas as etapas'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Discrição em nossas pesquisas'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }