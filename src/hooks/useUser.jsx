import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUser, loginUser, registerUser } from "../api/user.api.jsx";
import { useUserStore } from "../store/useUserStore.jsx";

export const useUser = () => {
  const setUser = useUserStore((s) => s.setUser);

  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    onSuccess: (data) => setUser(data),
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const setUser = useUserStore((s) => s.setUser);

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setUser(data.user);
      queryClient.invalidateQueries("user");
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  const setUser = useUserStore((s) => s.setUser);

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setUser(data.user);
      queryClient.invalidateQueries("user");
    },
  });
};
