import "../styles/globals.css";
import { Navbar, Footer } from "@/Component/ComponentIndex";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
