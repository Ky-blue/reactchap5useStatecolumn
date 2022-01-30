//React, useStateを使えるようにするためのimport
import React, { useState } from "react";
import "./styles.css";

//別ファイルに分けたコンポーネントをimport
//名前付きでエクスポートされている変数をインポート際は{}でくくる
import { Counter } from "./Counter.js";
import { Hello } from "./Hello.js";

const INITIAL_COUNT = 0;
const INIITIAL_NAME = "JavaScript";

//importしたのを含めてexport
export default function App() {
  //数値=カウントを上げたり下げたりする機能
  //countが状態変数、setCountがそれを更新する関数、初期値はINITIAL_COUNT
  const [count, setCount] = useState(INITIAL_COUNT);

  //こっちはフォームの文字列を反映させる機能
  //nameが状態変数でフォームの文字列が入る。初期値はINITIAL_NAME
  const [name, setName] = useState(INIITIAL_NAME);

  //カウントをあげるonClickイベントリスナー配下の関数
  //いつも通りの理由で波括弧とreturnは省略
  //これ省略のアロー関数に同様の関数入ってんね。省略しまくりじゃん
  const countIncrement = () => setCount((prevCount) => prevCount + 1);

  //カウントを下げるonClickイベントリスナー配下の関数
  const countDecrement = () => setCount((prevCount) => prevCount - 1);

  //クリックされたときにカウントを初期値=INITIAL_COUNT=0にする関数
  const countReset = () => setCount(INITIAL_COUNT);

  //フォームの状態が変化=onChangeした時に状態変数の管理関数を実行する
  const handleChangeName = (e) => setName(e.target.value);

  //Appコンポーネントの返り値をCounterコンポーネント、Helloコンポーネントとする
  return (
    <>
      {/* Reactは属性={値}のような記述で、
        親コンポーネントから子コンポーネントへpropsの引き渡し可
        変数=値のように、子も逆に属性で値を引き受けられる 
        つまり、このコンポーネントは挙動を定義してあるので、
        定義したuseStateやイベントリスナーを実際レンダリングされる
        子コンポーネントに渡して機能を搭載させてやる感じ。JSの記法なのでpropsは波括弧 */}
      {/* 実際に渡すのは各状態変数とイベントハンドラに渡す関数、各初期値*/}
      {/* 逆に状態管理変数を変更する関数自体は渡さない */}
      <Counter
        count={count}
        countIncrement={countIncrement}
        countDecrement={countDecrement}
        countReset={countReset}
        initialCount={INITIAL_COUNT}
      />

      <Hello
        name={name}
        handleChangeName={handleChangeName}
        initialName={INIITIAL_NAME}
      />
    </>
  );
}
