import React from 'react'
import Menu from '../../components/Menu'
// import useMouseY from '../../utils/useMouseY';
import { useSelector, useDispatch } from 'react-redux';


function Example() {
    const dispatch = useDispatch();
    const arrlist = useSelector(state => {
        console.log(state);
        return state.menuItemData
    });

    console.log(arrlist);
    // dispatch({
    //     type: "ADD_ITEM",
    //     payload: { itemNew: "測試資料" }
    // });

    // const mouseY = useMouseY()
    // const [close, setclose] = useState(false)

    // const arrmap = useMemo(() => {
    //     const abc = arrlist.map((item, index) => {
    //         return <li key={index}>{item}</li>
    //     })
    //     return abc
    // }, [])

    // 滑鼠偵測...
    // useEffect(() => {
    //     console.log(mouseY);
    // }, [mouseY])

    return (
        <>
            <Menu>{arrlist}</Menu>
            <button onClick={() => { dispatch({ type: "CLEAN_ITEM" }) }} >案看看</button>
        </>
    )
}

export default Example
