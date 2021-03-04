import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry...</h2>
            <p>The page you were looking for can not be found. Sad.</p>
            <Link to="/">Back to the home page!</Link>
        </div>
    );
}
 
export default NotFound;