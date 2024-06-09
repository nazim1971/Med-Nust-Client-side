import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AdModel from "../../../Modal/AdModel";
import { Helmet } from "react-helmet-async";


const AskForAd = () => {

  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: banners = [],
    refetch,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/banners/${user.email}`);
      return data;
    },
  });

    const handleShowModal = () => {
        document.getElementById('my_modal_1').showModal();
      };
    return (
        <div>
          <Helmet>
                <title>Ask for Ad</title>
            </Helmet>
          <div className="text-right">
          <button onClick={() => handleShowModal()} className="btn bg-orange-400 text-white">Ask for Ad</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              banners.map(i=> <div key={i._id} className="card border  bg-base-100 shadow-xl">
              <figure><img src={i.image} className="h-72 w-full" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{i.name} </h2>
                <p>{i.description} </p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>)
            }
          </div>
          <AdModel/>
        </div>
    );
};

export default AskForAd;