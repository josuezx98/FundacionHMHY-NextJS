import Navigation from "./navigation";
import Head from "next/head";
import Wp from './wp';
import Footer from './footer';

const Container = ({children}) => (
<div>
  <Head>
      <title>Psicoterapia</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
  </Head>
  <Navigation/>
  <div>
  {children}
  </div>
  <Footer/>
  <Wp/>
  <style jsx global>{
      `html,
      body {
        padding: 0;
        margin: 0;
        background: white;
        color: black;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
      a {
        color: inherit;
        text-decoration: none;
      },
      `}
  </style>
</div>
)
export default Container;