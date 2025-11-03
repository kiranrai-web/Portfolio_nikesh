import "./App.css";

import { Navbar } from "./component";
import {Header, AboutMe, Services, Projects, Testimonials, Contact, Footer} from "./container";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header/>
        <AboutMe/>
        <Services/>
        <Projects/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
