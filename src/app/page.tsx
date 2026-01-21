  import { AnimatePresence } from "framer-motion";
  import Header from "./components/Header";
  import Banner from "./components/Banner";
  import NossosClientes from "./components/NossosClientes";
import Proposito from "./components/Proposito";

  export default function Home() {
    return (
      <AnimatePresence>
        <Header key={"header"}/>
        <Banner key={"banner"}/>
        <NossosClientes key={"nossosClientes"}/>
        <Proposito key={"proposito"}/>
      </AnimatePresence>
    );
  }
