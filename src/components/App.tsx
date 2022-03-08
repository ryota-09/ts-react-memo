import React, { useCallback } from "react";
import { ChangeEvent, useState, FC } from "react";
import { MemoList } from "./MemoList"

export const App: FC = () => {
  const [text, setText] = useState<string>("");
  const [memoList, setMemoList] = useState<Array<string>>([]);
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClickAdd = () => {
    const newMemoList = [...memoList];
    newMemoList.push(text);
    setMemoList(newMemoList);
    setText("");
  };
  const onClickDelete = useCallback((index: number) => {
    const newMemoList = [...memoList];
    newMemoList.splice(index, 1);
    setMemoList(newMemoList);
  },[memoList]);
  
  return (
    <div className="App">
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button type="button" onClick={onClickAdd}>
        追加
      </button>
      <div className="container">
        <p>メモ一覧</p>
        <ul>
          {memoList.map((memo, index) => (
            <li key={memo}>
              <p>{memo}</p>
              <button onClick={() => onClickDelete(index)}>削除</button>  
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
