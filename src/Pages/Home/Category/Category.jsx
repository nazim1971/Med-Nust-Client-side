import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const Category = () => {
    const axiosPublic = useAxiosPublic();
    const {data: categoryName=[], refetch} = useQuery({
        queryKey: ['categoryName'],
        queryFn: async ()=>{
            const res = await axiosPublic('/categoryName');
            return res.data
        }
    })

    return (
        <div>
            <Title subTitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, nisi corporis eum animi aperiam fugiat corrupti ullam omnis dolorum repudiandae.'} title={'category section'} />

            <div className="grid grid-cols-3 gap-10">
                {
                    categoryName.map(i=> <div key={i._id} className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full" src={i.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{i.category} </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <Link to={`categoryData/${i.category}`} className="btn btn-primary">View All</Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Category;