import { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from '@emailjs/browser';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './styles.css';

function App() {
    useEffect(() => {
        emailjs.init('AXwpSMprlMUYT3B0O');
    }, []);

    return (
        <div>
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App;