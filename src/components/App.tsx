import React, { useCallback } from "react";
import { ChangeEvent, useState, FC } from "react";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
  const { memoList, addTodo, deleteTodo } = useMemoList();

  const [text, setText] = useState<string>("");
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };

  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);
    //関数も入れられる。
  },[deleteTodo]);

  return (
    <div className="App">
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button type="button" onClick={onClickAdd}>
        追加
      </button>
      <MemoList memoList={memoList} onClickDelete={onClickDelete} />
    </div>
  );
};
