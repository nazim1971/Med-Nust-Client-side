import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import UpdateProfileModal from "../../../Modal/UpdateProfileModal";


const UpdateProfile = () => {
    const {user,updateUserProfile,setLoader } = useAuth()
    const handleShowModal = () => {
      document.getElementById('my_modal_1').showModal();
    };
    return (
        <div className='flex justify-center items-center h-screen'>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <div className='bg-white shadow-lg rounded-2xl md:w-3/5'>
          <img
            alt='profile'
            src='https://wallpapercave.com/wp/wp10784415.jpg'
            className='w-full mb-4 rounded-t-lg h-36'
          />
          <div className='flex flex-col items-center justify-center p-4 -mt-16'>
            <a href='#' className='relative block'>
              <img
                alt='profile'
                src={user.photoURL}
                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
              />
            </a>
  
            
           
            <div className='w-full p-2 mt-4 rounded-lg'>
              <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
               <div>
               <p className='flex flex-col'>
                  Name
                  <span className='font-bold text-black '>
                    {user.displayName}
                  </span>
                </p>
                <p className='flex flex-col'>
                  Email
                  <span className='font-bold text-black '>{user.email}</span>
                </p>
               </div>
  
                <div className="mt-5 md:mt-0">
                  <button onClick={() => handleShowModal()} className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                    Update Profile
                  </button>
                  <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UpdateProfileModal user={user} updateUserProfile={updateUserProfile} setLoader={setLoader} />
      </div>
    );
};

export default UpdateProfile;