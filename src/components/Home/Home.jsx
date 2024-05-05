import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            This is home

            <Link to='/viewPrivate'><button className="btn btn-secondary">
                View private route
            </button></Link> 
        </div>
    );
};

export default Home;