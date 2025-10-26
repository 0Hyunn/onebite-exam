import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

// 상세 Todo 데이터를 가져오는 함수
export async function fetchTodoById(id: string) {
  const response = await fetch(`${API_URL}/todos/${id}`);

  if (!response.ok) throw new Error("Failed to fetch todo");

  const data: Todo = await response.json();
  return data;
}
