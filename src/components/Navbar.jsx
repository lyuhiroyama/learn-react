import { Link } from 'react-router-dom'

export default function Navbar() {
    return <nav className="nav">
            <Link to="/" className="site-title">Site Name</Link>
            <ul>
                <li>
                    <Link to="/hornets">Hornets</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
}