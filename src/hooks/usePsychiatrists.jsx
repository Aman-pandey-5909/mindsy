import { useQuery } from "@tanstack/react-query";
import { getPsychiatrists } from "../api/psychiatrist.api.jsx";

export const usePsychiatrists = () => {
  return useQuery({
    queryKey: ["psychiatrists"],
    queryFn: getPsychiatrists,
  });
};
