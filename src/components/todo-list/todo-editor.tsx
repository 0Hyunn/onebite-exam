import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutation";

export default function TodoEditor() {
  const { mutate, isPending } = useCreateTodoMutation();

  // 할 일 내용 상태
  const [content, setContent] = useState("");

  // 추가 버튼 클릭 시 할 일 추가
  const handleAddClick = () => {
    if (content.trim() === "") return;
    mutate(content);

    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="새로운 할 일을 입력하세요..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button disabled={isPending} onClick={handleAddClick}>
        {isPending ? "추가중..." : "추가"}
      </Button>
    </div>
  );
}
