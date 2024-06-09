import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { imageUpload } from "../Hooks";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";


const AdModel = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
      const image = data.image[0];
      const { name,description } = data;
      try {
        // 1. Upload image and get image url
        const image_url = await imageUpload(image);
        const adInfo = {
          name,
          image: image_url,
          description,
          status: "hold",
          sellerEmail: user.email
        };
        await axiosSecure.post("/addBanner", adInfo).then((res) => {
          if (res.data.insertedId) {
            toast.success("new cateogry added succesfully");
            document.getElementById("my_modal_1").close();
          }
        });
      } catch (err) {
        toast.error(err.message);
      }
    };
    return (
        <>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-xl font-semibold text-center">
                Add Category
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">Name</label>
                <input
                  {...register("name", { required: true })}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">Description</label>
                <input
                  {...register("description", { required: true })}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
  
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Select Image
                </label>
                <input
                  placeholder="Photo Url"
                  {...register("image", { required: true })}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="file"
                  accept="image/*"
                />
              </div>
  
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full btn btn-primary px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Continue
                </button>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
};

export default AdModel;