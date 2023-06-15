import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../service/userService";
import { getStoredUser } from "../util/storage";

export const useProfile = () => {
  return useQuery({
    queryFn: getUserProfile,
    queryKey: ["user", "profile"],
    placeholderData: getStoredUser(),
  });
};
