import Head from "next/head";
import {Box} from "@chakra-ui/react";
import {Navbar} from "./Navbar.component";
import {Footer} from "./Footer.component";

export const Layout = ({children}) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxWidth='1280px' m='auto'>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
);