import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const CategoryDate = () => {
    const {cat} = useParams()
    const axiosPublic = useAxiosPublic();
    const {data: categoryData=[]} = useQuery({
        queryKey: ['categoryData'],
        queryFn: async ()=>{
            const res = await axiosPublic(`/category?category=${cat}`);
            return res.data
        }
    })
    return (
        <div>
            <div className="grid grid-cols-3 gap-10">
                {
                   categoryData.map(i=>  <div key={i._id} className="card w-96 bg-base-100 shadow-xl">
                   <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                   <div className="card-body">
                     <h2 className="card-title">{i.name} </h2>
                     <p>If a dog chews shoes whose shoes does he choose?</p>
                     <div className="card-actions justify-end">
                       <button className="btn btn-primary">view details</button>
                     </div>
                   </div>
                 </div>)
                }
            </div>
        </div>
    );
};

export default CategoryDate;