import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Feedbacks,
  Menu,
  Hero,
  Navbar,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-red-300">
        <div className="bg-white bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="bg-red-500">
          <Menu />
        </div>

        <div className="relative z-0">
          <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
