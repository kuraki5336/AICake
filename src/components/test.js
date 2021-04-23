import React, { useState } from 'react'

const style1 = {
    margin: "30px"
}

function Test() {
    const [close, setclose] = useState(false)

    return (
        <>
            <div style={style1}>
                {close && <div style={{ width: "300px" }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    .Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.

            </div >
                }
                <button onClick={() => { setclose(!close) }}>子組件開關</button></div>
        </>
    )
}

export default Test
