import './App.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import FavouriteDetailPage from "./pages/FavouriteDetailPage.jsx";


function App() {
    return (
        <>
            <Navbar/>
            <Router>
                <Routes>
                    <Route path="/fav/:id" element={<FavouriteDetailPage/>}/>
                </Routes>
                <Link to="/">Back to Home Page</Link>
            </Router>
            <BrowserRouter basename="/my-app">
                {/* ... */}
            </BrowserRouter>
        </>
    );
}

export default App;
