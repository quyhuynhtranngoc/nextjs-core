import Head from "next/head";
import NavbarMenu from "./Navbar";
const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <header>
      <NavbarMenu />
    </header>
    <main>{children}</main>
  </>
);

export default Layout;
