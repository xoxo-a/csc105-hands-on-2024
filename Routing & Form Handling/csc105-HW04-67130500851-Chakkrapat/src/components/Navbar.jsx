import { NavLink, Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/fav">Favourites</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </nav>
            <Outlet />
        </>
    );
}

export default App;