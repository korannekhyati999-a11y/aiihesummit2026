import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ESummit from './components/ESummit';
import Events from './components/Events';
import Guests from './components/Guests';
import Agenda from './components/Agenda';
import PastSpeakers from './components/PastSpeakers';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ESummit />
      <Events />
      <Guests />
      <Agenda />
      <PastSpeakers />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
