import React, { useContext, useState, useMemo } from 'react'
import { ContextStore } from "../service/datapool/public";
import Test from "./test"




function Menu({ title, children }) {
    const [count, setCount] = useState(0)
    const [close, setclose] = useState(false)
    const isOpenUtil = useContext(ContextStore);

    return (
        <>
            <p>{title}</p>
            <button onClick={() => { isOpenUtil.setOpenContext(!isOpenUtil.openContext) }}>開關</button>
            <ul>{children}</ul>
            {/* <button onClick={() => { setclose(!close) }}>開關</button>
            {close && lilist} */}
            <ul>{<Test></Test>}</ul>

            <button onClick={() => { setCount(2) }}>+2</button>
        </>
    )
}

// menu.propTypes = {

// }

export default Menu
