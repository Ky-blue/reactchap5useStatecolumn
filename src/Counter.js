//countrコンポーネント
//別ファイルでこれを利用するようにするためexport
//JSX記法の中でJSの記述や変数を利用するため仮引数を波括弧で括っている

export const Counter = ({
  count,
  countIncrement,
  countDecrement,
  countReset,
  initialCount
}) => {
  //複数行にまたがるので波括弧で括ってある
  return (
    <div className="App">
      <p>
        {/* 状態変数/現在の値 count*/}
        現在のカウント数:<b>{count}</b>
        <br />
        {/* 状態変数countが更新されても初期値 initialCountは保持されたまま */}
        count の初期値:<b>{initialCount}</b>
      </p>
      <button onClick={countIncrement}>increment</button>
      <button onClick={countDecrement}>decrement</button>
      <button onClick={countReset}>reset</button>
    </div>
  );
};
