import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useClasses = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-puce.vercel.app/selectedClasses?email=${user?.email}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  return [classes, refetch];
};

export default useClasses;
