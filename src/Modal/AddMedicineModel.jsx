import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { imageUpload } from "../Hooks";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";

const AddMedicineModel = ({ refetch,categoryName }) => {
    const {user , loading, setLoader} = useAuth()
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, setError,clearErrors,formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const image = data.image[0];
    const {
      category,
      name,
      generic_name,
      description,
      company_name,
      mass_unit,
      per_unit_price,
      discount
    } = data;
    try {
      setLoader(true)
      // 1. Upload image and get image url
      const image_url = await imageUpload(image);
      setLoader(false)
      const categoryInfo = {
        category,
        name,
        generic_name,
        description,
        company_name,
        mass_unit,
        per_unit_price,
        discount,
        image: image_url,
        sellerEmail: user?.email
      };
      if (discount > 100) {
        setError("discount", {
          type: "manual",
          message: "Discount cannot be more than 100",
        });
        return;
      }
      await axiosSecure.post("/addMed", categoryInfo).then((res) => {
        if (res.data.insertedId) {
          refetch();
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
              <label className="block mb-2 text-sm font-medium ">
                Medicine Name
              </label>
              <input
                {...register("name", { required: true })}
                className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium ">
                Category Name
              </label>
              <select defaultValue={""} {...register("category",{required: true})} >
              <option  value="" disabled>Select a Category</option>
                {
                    categoryName.map(i=> <option key={i._id}  value={i.category}>{i.category}</option>)
                }
              </select>
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium ">
                Company Name
              </label>
              <select defaultValue={""} {...register("company_name",{required: true})} >
              <option  value="" disabled>Select Company</option>
              <option value="Incepta">Incepta</option>
              <option value="Opsonin Pharma">Opsonin Pharma</option>
              <option value="Square">Square</option>
              <option value="Beximco pharma">Beximco pharma</option>
              <option value="Renate limited">Renate limited</option>
              <option value="SK-F">SK-F</option>
              <option value="Populer">Populer</option>
              <option value="Radiant">Radiant</option>
              <option value="Healthcare">Healthcare</option>
              </select>
              
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium ">
                Mass Unit mg/ml
              </label>
              <input
                {...register("mass_unit", { required: true })}
                className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium ">
                Generic Name
              </label>
              <input
                {...register("generic_name", { required: true })}
                className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium ">
                Description
              </label>
              <input
                {...register("description", { required: true })}
                className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium ">
                Unit price
              </label>
              <input
                {...register("per_unit_price", { required: true })}
                className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium ">
                Discount
              </label>
              <input
                defaultValue={0}
                {...register("discount", { 
                  required: true,
                  validate: value => value <= 100 || "Discount cannot be more than 100"
                })}
                className="block w-full px-4 py-2 border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                onChange={() => clearErrors("discount")}
              />
              {errors.discount && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.discount.message}
                </p>
              )}
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
                {
                        loading ? <TbFidgetSpinner className="animate-spin m-auto" />
                        :
                        'Continue'
                      }
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

export default AddMedicineModel;
