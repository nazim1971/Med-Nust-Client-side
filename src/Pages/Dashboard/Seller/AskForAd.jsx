import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AdModel from "../../../Modal/AdModel";


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
        console.log('Opening modal');
        document.getElementById('my_modal_1').showModal();
      };
    return (
        <div>
          <button onClick={() => handleShowModal()} className="btn">Add for Ad</button>
          <div>
            {
              banners.map(i=> <div key={i._id} className="card w-96 bg-base-100 shadow-xl">
              <figure><img src={i.image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{i.name} </h2>
                <p>{i.description} </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
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