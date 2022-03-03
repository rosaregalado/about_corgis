import './App.css';
import Navbar from './Navbar';
import About from './About';
import History from './History';
import Personality from './Personality';
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <div><History /></div>
      <div><Personality /></div>
      <div><Gallery /></div>
      
      <Footer />
    </div>
  );
}

export default App;
