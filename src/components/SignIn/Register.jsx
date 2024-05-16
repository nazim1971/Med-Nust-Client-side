import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

  const { createUser,updateUserProfile } = useContext(AuthContext);
// show password
    const [pass, setPass] = useState(false);
    const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm()
  const onSubmit = (data) => {
    const {email,password,name,photo} = data


    // password validation
    if (password.length < 6) {
      setError("password", {
        type: "manual",
        message: "Password must be at least 6 characters long."
    })
    return
  }
    if (!/(?=.*[a-z])/.test(password)) {
      setError("password", {
        type: "manual",
        message: "Password must have at least one lowercase letter."
    })
  return
  }
    
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("password", {
        type: "manual",
        message:"Password must have at least one uppercase letter."
    })
    return
  }
    
    // create user
    createUser(email,password)
    .then(() => {
        toast.success("Account create Successfully");
        // create user profile
        updateUserProfile(name, photo).then(() => {
          navigate(location?.state ? location.state : "/");
        });
      }).catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.warning("This Email Already Used");
        } else {

          toast.error("An error occurred");
        }
      });


  }

  return (
    <div className="my-20">
           <div className="flex w-full border my-20 max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl">
          
      
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
              <div className="flex justify-center mx-auto">
                  <img className="w-auto h-10 sm:h-12" src="https://i.ibb.co/GJg1fYZ/Brain-boost-removebg-preview.png" alt="" />
              </div>
      
              <p className="mt-3 text-xl text-center ">
              Register to Get Started
              </p>
              <form  onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium " >Name</label>
                  <input
                  {...register("name",{required: true})}
                   className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="text" />
              </div>
              <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium " >Email Address</label>
                  <input
                  {...register("email",{required: true})}
                   className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="email" />
              </div>
              <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium " >Photo</label>
                  <input
                  placeholder="Photo Url"
                  {...register("photo",{required: true})}
                   className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="url" />
              </div>
      
              <div className="mt-4">
                  <div className="flex justify-between">
                      <label className="block mb-2 text-sm font-medium " >Password</label>
                      <a href="#" className="text-xs  hover:underline">Forget Password?</a>
                  </div>
      
                  <div >
                 <div className="flex items-center gap-5">
                 <input 
                   {...register("password",{required: true})}
                   className="block w-full px-4 py-2  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" 
                  type={pass ? "text" : "password"} />
                  
                   <a onClick={() => setPass(!pass)} >
                    {pass ? <FaRegEye className="" /> : <FaRegEyeSlash />}
                  </a>
                 </div>
                 {errors.password && (
                  <span className="text-red-600 text-center font-semibold p-1">
                    {errors.password.message}{" "}
                  </span>
                )}
                  </div>
              </div>
      
              <div className="mt-6">
                  <button type="submit" className="w-full btn btn-primary px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                      Register
                  </button>
              </div>
              </form>
      
              <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b  md:w-1/4"></span>
      
                  <Link to='/login' className="text-xs  uppercase  hover:underline text-rose-500">or sign in</Link>
      
                  <span className="w-1/5 border-b md:w-1/4"></span>
              </div>
          </div>
          <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage: 'url(https://i.ibb.co/F4SRb4t/sign-up.jpg)'}} ></div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
