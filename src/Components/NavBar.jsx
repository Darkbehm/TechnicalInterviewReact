import { Link } from "react-router-dom";
import './NavBar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav>
                <div className="NavBarLogo">
                    <Link to="/">Menu</Link>
                </div>
                <div className="NavBarLogo">
                    <span>User Name</span>
                </div>
                <Link to="/reports" className="NavBarItem">Reportes de ventas</Link>
            </nav>
        </div>
    );
};

export default Navbar;