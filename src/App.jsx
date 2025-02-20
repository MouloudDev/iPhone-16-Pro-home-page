import Hero from './components/Hero.jsx';
import Highlights from './components/Highlights.jsx';
import CloserLook from './components/CloserLook.jsx';
import Nav from './components/Nav/index.jsx';
import Features from './components/Features.jsx';
import AppleIntelligence from './components/AppleIntelligence';
import CameraControl from './components/CameraControl.jsx';
import AudioVideo from './components/AudioVideo.jsx';

function App() {
  return (
    <>
     <Nav />
     <Hero />
     <Highlights />
     <CloserLook />
     <Features />
     <AppleIntelligence />
     <CameraControl />
     <AudioVideo />
    </>
  )
}

export default App;
