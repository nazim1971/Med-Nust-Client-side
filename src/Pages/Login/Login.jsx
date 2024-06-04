import {  useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {  FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Login = () => {

  const axiosPublic = useAxiosPublic();
  const { login ,googleLogin} = useAuth() ;
  
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
  .then(result =>{
    console.log(result.user);
    const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        role: 'user',
        image: result.user.photoURL
        
    }
    axiosPublic.post('/users', userInfo)
    .then(res =>{
        console.log(res.data);
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
    })
})
    .catch();
};


    return (
      <div className="my-20">
      <div className="flex w-full border max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl">
          <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage: 'url(https://i.ibb.co/MfYyWhP/login.jpg)'}} ></div>
      
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
              <div className="flex justify-center mx-auto">
                  <img className="w-auto h-10 sm:h-12" src="https://i.ibb.co/GJg1fYZ/Brain-boost-removebg-preview.png" alt="" />
              </div>
      
              <p className="mt-3 text-xl text-center ">
                  Welcome back!
              </p>
      
              <a onClick={handleGoogleLogin} href="#" className="flex items-center justify-center mt-4  transition-colors duration-300 transform border rounded-lg  hover:bg-gray-50 ">
                  <div className="px-4 py-2">
                      <svg className="w-6 h-6" viewBox="0 0 40 40">
                          <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                          <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                          <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                          <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                      </svg>
                  </div>
      
                  <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
              </a>
      
              <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b  lg:w-1/4"></span>
      
                  <a href="#" className="text-xs text-center  uppercase hover:underline">or login
                      with email</a>
      
                  <span className="w-1/5 border-b  lg:w-1/4"></span>
              </div>
      
              <form  onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium " >Email Address</label>
                  <input
                  {...register("email",{required: true})}
                  id="LoggingEmailAddress" className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="email" />
              </div>
      
              <div className="mt-4">
                  <div className="flex justify-between">
                      <label className="block mb-2 text-sm font-medium " >Password</label>
                      <a href="#" className="text-xs  hover:underline">Forget Password?</a>
                  </div>
      
                  <div className="flex items-center gap-5">
                  <input 
                   {...register("password",{required: true})}
                  id="loggingPassword" className="block w-full px-4 py-2  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" 
                  type={pass ? "text" : "password"} />
                  
                   <a onClick={() => setPass(!pass)} >
                    {pass ? <FaRegEye className="" /> : <FaRegEyeSlash />}
                  </a>
                  </div>
              </div>
      
              <div className="mt-6">
                  <button type="submit" className="w-full btn btn-primary px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                      Sign In
                  </button>
              </div>
              </form>
      
              <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b  md:w-1/4"></span>
      
                  <Link to='/register' className="text-xs  uppercase  hover:underline text-rose-500">or sign up</Link>
      
                  <span className="w-1/5 border-b md:w-1/4"></span>
              </div>
          </div>
      </div> <ToastContainer/>
  </div>
    );
};

export default Login;