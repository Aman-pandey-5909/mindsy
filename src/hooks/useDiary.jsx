import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getDiaries, createDiary } from "../api/diary.api.jsx";
import { useDiaryStore } from "../store/useDiaryStore.jsx";

export const useDiary = () => {
  const setEntries = useDiaryStore((s) => s.setEntries);

  return useQuery({
    queryKey: ["diaries"],
    queryFn: getDiaries,
    onSuccess: (data) => setEntries(data),
  });
};

export const useCreateDiary = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDiary,
    onSuccess: () => {
      queryClient.invalidateQueries("diaries");
    },
  });
};
