//Counterコンポーネント同様

export const Hello = ({ name, handleChangeName, initialName }) => {
  return (
    <div className="App">
      <p>
        {/* 状態変数name */}
        Hello, <b>{name} !!</b>
        <br />
        {/* 状態変数nameが更新されても初期値initialNameが保持されてる */}
        name の初期値: <b>{initialName}</b>
      </p>

      {/* フォームの中身が変更=onChangeするとリアルタイムでnameを変更する */}
      <input type="text" onChange={handleChangeName} />
    </div>
  );
};
