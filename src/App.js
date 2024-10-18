// import logo from './logo.svg';
import Services from './components/services';
import Hero from './components/hero';
import Footer from './components/footer';
import NavBar from './components/navbar';
import WhyChooseUs from './components/whychooseus';
import AboutUs from './components/about';
import Contact from './components/Contact';
import ConsultingDevelopment from './components/ConsultingDevelopment.js';
import { Route, Routes } from 'react-router-dom';
import '../src/styles/global.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* Home route - Display Hero, WhyChooseUs, Services, and Footer */}
        <Route path="/" element={
          <>
            <Hero />
            <ConsultingDevelopment/>
            <Services />
            <WhyChooseUs />
            {/* <Trial/> */}
            {/* <CarouselComponent/> */}
          </>
        } />
        
        {/* About route - Display AboutUs only */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        {/* Additional routes can go here */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
