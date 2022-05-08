import { Link } from "react-router-dom";
import './notfound.scss'
function NotFound() {
    return (
        <Link to="/">
            <div className="NotFound">
                NotFound Click Me!
            </div>
        </Link>
    );
}

export default NotFound;