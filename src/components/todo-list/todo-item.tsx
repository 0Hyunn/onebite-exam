import { Button } from "../ui/button";
import { Link } from "react-router";
import type { Todo } from "@/types";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";

export default function TodoItem({ id, content, isDone }: Todo) {
  const { mutate } = useUpdateTodoMutation();
  const handleDeleteClick = () => {};

  const handleCheckboxClick = () => {
    mutate({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input type="checkbox" checked={isDone} onClick={handleCheckboxClick} />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button variant="destructive" onClick={handleDeleteClick}>
        삭제
      </Button>
    </div>
  );
}
