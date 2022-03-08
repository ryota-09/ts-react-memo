import React, { FC } from "react"

type Props = {
  memoList: Array<string>,
  //関数を受け取る時の書き方
  onClickDelete: (index: number) => void,
}

export const MemoList: FC<Props> = props => {
  const { memoList, onClickDelete } = props;
  return (
    <div className="container">
      <p>メモ一覧</p>
      <ul>
        {memoList.map((memo, index) => (
          <li key={memo}>
            { memo }
            {/* クリック時に引数を渡す場合、void型はonClickに割り当てられない。 */}
            <button type="button" onClick={() => onClickDelete(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
