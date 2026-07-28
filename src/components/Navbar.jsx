import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <h1>JobZila</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/job_search">Job Search</Link></li>
                    <li><Link to="/job_listing">Job Listing</Link></li>
                    <li><Link to="/terms">Terms of Service</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/contact_us">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;