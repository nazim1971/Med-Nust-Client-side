import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpiner";


const ManageBannerAd = () => {

    const axiosSecure = useAxiosSecure();
    const {data: manageBanner =[], isLoading,refetch} = useQuery({
        queryKey: ['manageBanner'],
        queryFn: async ()=>{
            const {data} = await axiosSecure('/banner');
            return data;
        }
    })

    //toggle buton
    const handleToggle = async(id,isChecked)=>{
        const newStatus = isChecked ? "active" : "hold";
        console.log(newStatus);
        try {
            const response = await axiosSecure.patch(`/banner/${id}`, { status: newStatus });
            if (response.status === 200) {
              refetch(); // Refetch data after updating banner status
            } else {
              // Handle error if update fails
              console.error("Failed to update banner status:", response.data);
            }
          } catch (error) {
            console.error("Error updating banner status:", error);
          }
    }


    if(isLoading) return <LoadingSpinner/>
    return (
        <div>
                      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Description</th>
        <th>Button</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        manageBanner.map((i,idx)=>
            <tr key={i._id}>
        <th>
          {idx+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={i.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold"> {i.name} </div>
            </div>
          </div>
        </td>
        <td>
            {i.sellerEmail}
        </td>
        <td> {i.description} </td>
        <th>
           <span>
            {i.status}
           </span>
        <input
        onChange={(e)=>handleToggle(i._id, e.target.checked)} type="checkbox" className="toggle [--tglbg:yellow] bg-blue-500 hover:bg-blue-700 border-blue-500"  />
        </th>
      </tr>)
      }
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default ManageBannerAd;