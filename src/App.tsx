import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";
import { Steps } from "./components/Steps";
import { Strip } from "./components/Strip";

function App() {
  return (
    <>
      <Strip />
      <Navbar />
      <Main />
      <Steps />
      <div className="lg:mx-16 mx-3 ">
        <Product />
      </div>
      <Footer />
    </>
  );
}

export default App;
