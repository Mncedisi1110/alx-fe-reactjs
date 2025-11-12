import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style= {{ padding: "10px", borderBottom: "1px solid #ccc",backgroundColor: "#f8f8f8" }}>
            <ul style= {{ listStyleType: "none", display: "flex",justifyContent: "center", gap: "20px" }}>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Services">Services</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;