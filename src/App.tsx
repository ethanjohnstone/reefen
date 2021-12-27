import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroWithImage } from "./components/heros/HeroWithImage";
import { ProductList } from "./components/products/ProductList";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header></Header>
    <HeroWithImage></HeroWithImage>
    <ProductList></ProductList>
    <Footer></Footer>
  </ChakraProvider>
)
