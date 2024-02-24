import './css/App.css';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import WhyFabric from './components/WhyFabric';
import Advantages from './components/Advantages';
import Suspension from './components/Suspension';
import Dispersion from './components/Dispersion';
import FullBrochure from './components/FullBrochure';

function App() {
  const location = useLocation();
  return (
    <>
      <video src={process.env.PUBLIC_URL + "/assets/videos/bg-video.mp4"} autoPlay loop muted className="absolute top-0 left-0 -z-20 w-full h-full object-cover">
        <source src={process.env.PUBLIC_URL + "/assets/videos/bg-video.mp4"} type="video/mp4" />
      </video>
      <div className="overlay absolute top-0 left-0 w-full h-full object-cover bg-black opacity-30 -z-10"></div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index path="/*" element={<Home />} />
          <Route path="/why-fabric" element={<WhyFabric />} />
          <Route path="/advantages-of-fabricAir" element={<Advantages />} />
          <Route path="/suspension-types" element={<Suspension />} />
          <Route path="/dispersion-types" element={<Dispersion />} />
          <Route path="/full-brochure" element={<FullBrochure />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
