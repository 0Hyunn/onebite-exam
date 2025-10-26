import { fetchTodos } from "@/api/fetch-todos";
import { useQuery } from "@tanstack/react-query";

// todos 데이터를 가져오는 커스텀 훅
// queryFn : queryFunction => fetchTodos
export function useTodosData() {
  return useQuery({
    queryFn: fetchTodos,
    queryKey: ["todos"],
    retry: 0,
  });
}
