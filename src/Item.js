import React, { useState } from 'react'

const Item = ({ content }) => {
    const [isDone, setIsDone] = useState(false) // 現在の状態と更新する関数を返す
    //コンポーネント内の変化する変数。現在の状態を表す変数は記憶しているので初期値falseになるわけではない
    return (
        <li>
            <input type='checkbox' onChange={() => {
                setIsDone(!isDone)//onChangeはイベント
            }} />
            <span style={
                { textDecoratioin: isDone ? 'line-through' : 'none' }
            }>{content}</span>
        </li>
    )
}

export default Item; 