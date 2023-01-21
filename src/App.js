import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { FaArrowUp } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="main-container" style={{ paddingTop: "100vh" }}>
          <section className="hero-section" id="hero">
            Hero section
          </section>
          <section id="call-for-paper">Call for Paper</section>
          <section id="paper-submission">Paper Submission</section>
        </main>
        <HashLink className="back-to-top" to="#">
          <FaArrowUp />
        </HashLink>
      </div>
    </BrowserRouter>
  );
}

export default App;
