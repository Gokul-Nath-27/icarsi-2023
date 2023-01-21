import './App.css';
import Navbar from './components/navbar/Navbar';
import { FaArrowUp } from 'react-icons/fa'
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-container" style={{paddingTop: "100vh"}}>
        <section  className='hero-section' id="hero">Hero section</section>
        <section id="call-for-paper">Call for Paper</section>
        <section id="paper-submission">Paper Submission</section>
        <a className='back-to-top' href="#">
          <FaArrowUp />
        </a>
      </main>
    </div>
  );
}

export default App;
