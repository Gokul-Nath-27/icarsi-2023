import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { FaArrowUp } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Footer from "./components/footer/Footer";
import Impdate from "./components/impdate/ImpDate";
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="main-container">
          <section className="hero-section" id="hero"></section>
          <Impdate />
          <section id="call-for-paper">Call for Paper</section>
          <section id="paper-submission">Paper Submission</section>
          <section id="contact">Contact</section>
        </main>
        <HashLink className="back-to-top" to="#">
          <FaArrowUp />
        </HashLink>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
