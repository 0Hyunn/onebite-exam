import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {},
    onSettled: () => {},
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [newTodo]; // 투두리스트가 없다면 새로운 투두 리스트 추가

        return [...prevTodos, newTodo]; // 투두리스트가 있다면 기존 투두리스트에 새로운 투두 추가
      });
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
