import React, { useContext, useState } from 'react'
import Test from "./test"




function Menu({ title, children }) {
    const [count, setCount] = useState(0)
    const [close, setClose] = useState(false)

    return (
        <>
            <p>{title}</p>
            <button onClick={() => { setClose(!close) }}>開關</button>
            <ul>{children}</ul>
            <ul>{<Test></Test>}</ul>

            <button onClick={() => { setCount(2) }}>+2</button>
        </>
    )
}

// menu.propTypes = {

// }

export default Menu
