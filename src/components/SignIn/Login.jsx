import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {



   
  const { login ,googleLogin} = useContext(AuthContext);
  
  // show password
  const [pass, setPass] = useState(false);
  const location = useLocation();
const navigate = useNavigate();

const {
  register,
  handleSubmit
} = useForm()
const onSubmit = (data) => {
  const {email,password} = data

  // login user
  login(email, password)
    .then(() => {
      toast.success("Login Successfully");
     
      navigate(location?.state ? location.state : "/");
    })
    .catch((err) => {
      if (err.code === "auth/invalid-credential") {
        toast.warning("Invalid user/password");
      }
    });
}

// google
const handleGoogleLogin = () => {
  googleLogin()
    .then(() => {
      toast.success("Login Successfully");
      navigate(location?.state ? location.state : "/");
    })
    .catch();
};


    return (
      <div className="">
      <div style={{backgroundImage: 'url(https://i.ibb.co/p4h8Gxk/tropical-leaves-palm-branch-realistic-frame-composition-with-transparent-background-clusters-leaves.png)'}} className="my-20 bg-cover">
        <p className="text-3xl font-bold text-center">Login</p>
      <h1 className="text-3xl font-bold text-center">Nice to see you again</h1>
      <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full p-3 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="email"
            className="input border-green-500 input-bordered"
            required
          />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              {...register("password")}
              type={pass ? "text" : "password"}
              placeholder="Enter password"
              className="input border-green-500 input-bordered"
              required
            />
            <a onClick={() => setPass(!pass)} className="">
              {pass ? <FaRegEye /> : <FaRegEyeSlash />}
            </a>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt text-green-500 link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-500 text-white">Login</button>
        </div>
      </form>
      <hr />
      <div className="p-3 m-3">
      <div className="flex justify-between">
          <button
            onClick={handleGoogleLogin}
            className="btn border-none bg-[#4539ecc0] text-white"
          >
            <FaGoogle /> Google
          </button>
        </div>
        <p className="my-2">
          Don't have an account?{" "}
          <Link className="text-green-500 " to="/register">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
<ToastContainer />
  </div>
    );
};

export default Login;