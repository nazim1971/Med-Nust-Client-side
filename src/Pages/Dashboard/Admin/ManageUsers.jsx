import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpiner";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users= [],isLoading,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
           const {data } = await axiosSecure('/users')
       return data;
        } 
    })

    // change the role
    const handleChangeRole = (user, newRole) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`, { role: newRole })
                    .then(res => {
                        refetch();
                        console.log(res.data);
                        Swal.fire({
                            title: "Updated!",
                            text: "The user role has been updated.",
                            icon: "success"
                        });
                    });
            }
        });
    };
   
   

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
        <th>Role</th>
        <th>Change Role </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((i,idx)=><tr key={i._id}>
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
              <div className="font-bold">{i.name} </div>
            </div>
          </div>
        </td>
        <td>
          {i.email}
          
        </td>
        <td>
          {i.role}
          
        </td>
        <td>
        <select   disabled={i.email === 'md.nazimuddinaj@gmail.com'} onChange={(e)=> handleChangeRole(i, e.target.value)} defaultValue={i.role} name='role' >
              <option  value="" disabled>Select a role</option>
                <option value="user">User</option>
                <option value="seller">Seller</option>
                <option value="admin">Admin</option>
              </select>
             </td>
      </tr>)
      }

    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default ManageUsers;