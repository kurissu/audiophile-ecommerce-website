import Head from 'next/head'
import { Button, Container, Box } from '@chakra-ui/react'
import Header from 'components/organisms/Header'
import Hero from 'components/organisms/Hero'
import CategoriesLinks from 'components/organisms/CategoriesLinks'
import MainGallery from 'components/organisms/MainGallery'
import BestGear from 'components/molecules/BestGear/BestGear'
import Footer from 'components/organisms/Footer'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
      </Head>
      <Header />
      <Hero />
      <Container maxW="container.lg" px={6} as="main">
        <CategoriesLinks />
        <MainGallery />
        <BestGear />
        <Footer />
      </Container>
    </>
  )
}

export default HomePage
