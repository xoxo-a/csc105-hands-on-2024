import Navbar from './assets/navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Gallery from './pages/Gallery';

function App() {
    return (
        <div>
            <Navbar />
            <Home/>
            <AboutMe/>
            <Gallery/>
        </div>
    );
}

export default App;