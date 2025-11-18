import { useQuery } from "@tanstack/react-query";
import { getDiaries } from "../api/diary.api.jsx";
import { useDiaryStore } from "../store/useDiaryStore.jsx";

export const useDiary = () => {
  const setEntries = useDiaryStore((s) => s.setEntries);

  return useQuery({
    queryKey: ["diaries"],
    queryFn: getDiaries,
    onSuccess: (data) => setEntries(data),
  });
};
