import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpiner";
import { BsCapsule } from "react-icons/bs";
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";



const Category = () => {

   
    
    const axiosPublic = useAxiosPublic()


    useEffect(()=>{
        Aos.init()
      },[])

    const {data: categoryName=[], isLoading} = useQuery({
        queryKey: ['categoryName'],
        queryFn: async ()=>{
            const res = await axiosPublic('/categoryName');
            return res.data
        }
    })

    if(isLoading) return <LoadingSpinner/>

   
    return (
        <div>
            <Title subTitle={'Discover a wide range of healthcare and wellness products. Find everything you need for your health and well-being.'} title={'Shop by Category'} />

            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-10 ">
                {
                    categoryName.map(i=> <div key={i._id} data-aos-delay="300"  data-aos-duration="600" data-aos="fade-right" className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-72 w-full" src={i.image} alt="category" /></figure>
                    <div className="p-5">
                      <h2 className="card-title">{i.category} </h2>
                      <p className="flex gap-3 items-center"> <BsCapsule className="text-orange-400"/> {i.category.length} </p>
                      <div className="card-actions justify-end">
                        <Link to={`categoryData/${i.category}`} className="btn bg-orange-400 text-white">View All</Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Category;