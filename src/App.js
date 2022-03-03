import './App.css';
import Navbar from './Navbar';
import About from './About';
import Personality from './Personality';
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Personality />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
