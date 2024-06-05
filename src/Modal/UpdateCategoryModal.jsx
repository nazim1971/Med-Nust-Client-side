import { useForm } from "react-hook-form";
import { imageUpload } from "../Hooks";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const UpdateCategoryModal = ({refetch,id}) => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
      const image = data.image[0];
      const { name } = data;
      try {
        let image_url = ""; // Initialize image_url as an empty string

        if (image) { // Check if a new image is selected
          // 1. Upload image and get image url
          image_url = await imageUpload(image);
        } else if (id.image) { // Check if there's an existing image URL
          image_url = id.image; // Use the existing image URL
          console.log(image_url);
        }
        // 1. Upload image and get image url
        // const image_url = await imageUpload(image);
        
        const categoryInfo = {
          category: name,
          image: image_url,
        };
        console.log("data before adding db", categoryInfo);
        await axiosSecure.patch(`/category/${id._id}`, categoryInfo).then((res) => {
            console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            console.log("category added to the database");
            toast.success("new cateogry added succesfully");
            document.getElementById("my_modal_2").close();
          }
        });
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    };


    return (
        <>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-xl font-semibold text-center">
                Update Category
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">Name</label>
                <input defaultValue={id.category}
                  {...register("name", { required: true })}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
  
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Select Image
                </label>
                <input
                 defaultValue={id.image}
                  placeholder="Photo Url"
                  {...register("image", {required: false})}
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

export default UpdateCategoryModal;