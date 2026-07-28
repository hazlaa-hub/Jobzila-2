import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p>&copy; My Job board. All rights reserved.
                <Link to="/contact_us">Contact Us</Link> | 
                <Link to="/terms">Terms</Link> | 
                <Link to="/privacy">Privacy</Link>
            </p>
        </footer>
    );
};

export default Footer;