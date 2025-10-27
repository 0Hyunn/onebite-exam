import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

// Partial<Todo> : Todo 타입의 일부 속성만 업데이트 가능 (id, content, isDone 중 선택해서 업데이트 가능) but id는 필수 속성
export async function updateTodo(todo: Partial<Todo> & { id: string }) {
  const response = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
  });

  if (!response.ok) throw new Error("Failed to update todo");

  const data: Todo = await response.json();
  return data;
}
