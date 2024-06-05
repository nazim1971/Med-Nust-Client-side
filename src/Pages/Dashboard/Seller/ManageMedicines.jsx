import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";


const ManageMedicines = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: manageMedicine =[], isLoading,refetch} = useQuery({
        queryKey: ['manageMedicine'],
        queryFn: async ()=>{
            const {data} = await axiosSecure(`/sellerMed/${user.email}`);
            return data;
        }
    })
    return (
        <div>
            <div className="text-right">
                <button className="btn btn-warning" >Add Medicine</button>
            </div>
          <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Company Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {manageMedicine.map((i, idx) => (
              <tr key={i._id}>
                <th> {idx+1} </th>
                <td> {i.name} </td>
                <td>{i.company_name}  </td>
                <td> {i.description} </td>
                 
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageMedicines;