import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <link rel="be happy icon" href="/favicon.png" />
        <title>Be Happy | Empreendimentos turísitcos</title>
        <meta name="description" content="Empresa especializada em compra, venda e intermediação de empreendimentos nos principais pontos turísticos do Brasil."/>
        <meta name="keywords" content="Imóveis, empreendimentos, turismo, real state, compra e venda, compra, venda, hóteis, casas, apartamentos"/>
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <meta name="robots" content="index" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
