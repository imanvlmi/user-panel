import { useAppQuery } from "@/lib/query";
import getUserApi from "@/services/api/user/getUser";

const useGetUser = () => {
  const response = useAppQuery({
    queryKey: ["user"],
    queryFn: () => getUserApi(),
  });

  return response;
};

export default useGetUser;
