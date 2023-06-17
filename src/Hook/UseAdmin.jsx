import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const UseAdmin = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if(!user){
                return false
            }
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}

export default UseAdmin;