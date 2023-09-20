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
      <div className="mx-10">
        <Main />
        <Steps />
      </div>
      <div className="mx-3">
        <Product />
      </div>
      <Footer />
    </>
  );
}

export default App;
