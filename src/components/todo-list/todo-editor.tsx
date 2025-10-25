import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useCreateTodo } from "@/store/todos";

export default function TodoEditor() {
  // 할 일 추가 액션 호출
  const createTodo = useCreateTodo();

  // 할 일 내용 상태
  const [content, setContent] = useState("");

  // 추가 버튼 클릭 시 할 일 추가
  const handleAddClick = () => {
    if (content.trim() === "") return;
    createTodo(content);
    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="새로운 할 일을 입력하세요..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={handleAddClick}>추가</Button>
    </div>
  );
}
