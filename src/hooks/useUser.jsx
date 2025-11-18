import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/user.api.jsx";
import { useUserStore } from "../store/useUserStore.jsx";

export const useUser = () => {
  const setUser = useUserStore((s) => s.setUser);

  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    onSuccess: (data) => setUser(data),
  });
};
