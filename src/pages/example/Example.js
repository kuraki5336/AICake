import React, { useMemo, useRef, useState } from 'react'
import Menu from '../../components/Menu'

function Example() {
    const arrlist = ['梓晏', '油油', '璇璇0', '媽媽']

    const [close, setclose] = useState(false)

    const test = useMemo(() => {
        return 'abc'
    }, [])
    console.log(test);
    console.log(
        arrlist.map((item, index) => {
            return <li key={index}>{item}</li>
        }));

    const arrmap = useMemo(() => {
        const abc = arrlist.map((item, index) => {
            return <li key={index}>{item}</li>
        })
        console.log(abc);
        return abc
    }, [])
    console.log(arrmap);

    return (
        <>
            <p onClick={console.log()} >123456</p>
            <Menu title={`我是標題吧 `}>{arrmap}</Menu>
            <p>654321</p>
            <button >案看看</button>
        </>
    )
}

export default Example
