import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Kits from './components/Kits/Kits';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Kits />
      </main>
      <Footer />
    </>
  );
}

export default App;
