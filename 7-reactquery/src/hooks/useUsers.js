import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createUser,
  getUserInfo,
  getUsers,
  getUsersByPage,
} from "../services/UserService";

export const useUsers = () => {
  return useQuery({
    queryKey: ["user", "all"],
    queryFn: getUsers,
  });
};
export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", "all"] });
    },
  });
};

export const useUserDetail = (id) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["user", id],
    queryFn: getUserInfo,
    initialData: () => {
      const allUser = queryClient.getQueryData(["user", "all"]);
      return allUser?.find((item) => item.id === parseInt(id));
    },
  });
};
