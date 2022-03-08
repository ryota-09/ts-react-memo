import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [memoList, setMemoList] = useState<Array<string>>([]);
  const addTodo = useCallback(
    (text: string) => {
      const newMemoList = [...memoList];
      newMemoList.push(text);
      setMemoList(newMemoList);
    },
    [memoList]
  );
  const deleteTodo = useCallback((index: number) => {
    const newMemoList = [...memoList];
    newMemoList.splice(index, 1);
    setMemoList(newMemoList);
  },[memoList]);
  return { memoList, addTodo, deleteTodo };
};
