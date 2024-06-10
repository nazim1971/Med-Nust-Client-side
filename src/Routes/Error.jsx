import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center">
            <img className="mx-auto" src="https://i.ibb.co/gv53vx6/Code-Pen-404-Page-ezgif-com-crop.gif" alt="" />
            <div> <Link to='/' className="btn btn-accent"> Home </Link> </div>
        </div>
    );
};

export default Error;