import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { imageUpload } from "../Hooks";
import { useQuery } from "@tanstack/react-query";


const UpdateMedicineModal = ({categoryName, refetch, id}) => {

    const axiosSecure = useAxiosSecure();

    const {data: updateMed =[]} = useQuery({
        queryKey: ['updateMed'],
        queryFn: async ()=>{
            const {data} = await axiosSecure(`/updateMed/${id}`);
            return data;
        },
        enabled: !!id,
    })
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const image = data.image[0];
        try {
          let image_url = updateMed.image || ""; // Initialize image_url as an empty string
  
          if (image) { // Check if a new image is selected
            // 1. Upload image and get image url
            image_url = await imageUpload(image);
          }
          
          
          
            const updatedMedicine = {
                name: data.name,
                company_name: data.company_name,
                category: data.category,
                image: image_url,
                mass_unit: data.mass_unit,
                generic_name: data.generic_name,
                description: data.description,
                per_unit_price: data.per_unit_price,
                discount: data.discount,
              };
          
          await axiosSecure.patch(`/selectedMed/${updateMed._id}`, updatedMedicine).then((res) => {
          
            if (res.data.modifiedCount > 0) {
              refetch();
              toast.success("new cateogry added succesfully");
              document.getElementById("my_modal_2").close();
            }
          });
        } catch (err) {
          toast.error(err.message);
        }
      };

    return (
        <>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-xl font-semibold text-center">
                Add Category
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Medicine Name
                </label>
                <input
                defaultValue={updateMed.name}
                  {...register("name",{required: true})}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Category Name
                </label>
                <select defaultValue={updateMed.category} {...register("category",{required: true})} >
                  {
                      categoryName.map(i=> <option key={i._id}  value={i.category}>{i.category}</option>)
                  }
                </select>
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Company Name
                </label>
                <input
                defaultValue={updateMed.company_name}
                  {...register("company_name",{required: true})}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Mass Unit mg/ml
                </label>
                <input
                defaultValue={updateMed.mass_unit}
                  {...register("mass_unit",{required: true})}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Generic Name
                </label>
                <input
                defaultValue={updateMed.generic_name}
                  {...register("generic_name",{required: true})}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Description
                </label>
                <input
                defaultValue={updateMed.description}
                  {...register("description",{required: true})}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Unit price
                </label>
                <input
                defaultValue={updateMed.per_unit_price}
                  {...register("per_unit_price",{required: true})}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="number"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Discount
                </label>
                <input

            defaultValue={updateMed.discount}
                  {...register("discount",{required: true})}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="number"
                />
              </div>
  
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Select Image
                </label>
                <input
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

export default UpdateMedicineModal;