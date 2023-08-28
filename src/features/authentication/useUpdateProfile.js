import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentProfile as updateProfileApi } from "../../services/apiAuth";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateProfile } = useMutation({
    mutationFn: updateProfileApi,
    onSuccess: () => {
      toast.success("Profile successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["profiles"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateProfile };
};
