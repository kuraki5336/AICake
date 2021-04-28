import React, { useMemo } from 'react'
import Menu from '../../components/Menu'
// import useMouseY from '../../utils/useMouseY';
import { useSelector, useDispatch } from 'react-redux';
// css
import { Aoao } from './style';
import { fetchCityItem } from '../../model/publicService';


function Example() {
    const dispatch = useDispatch();
    const arrlist = useSelector(state => {
        console.log(state);
        return state.commonReducer.menuItemData
    });

    // dispatch({
    //     type: "ADD_ITEM",
    //     payload: { itemNew: "測試資料" }
    // });

    // const mouseY = useMouseY()
    // const [close, setclose] = useState(false)

    const arrmap = useMemo(() => {
        const abc = arrlist.map((item, index) => {
            return <li key={index}>{item}</li>
        })
        return abc
    }, [])

    // 滑鼠偵測...
    // useEffect(() => {
    //     console.log(mouseY);
    // }, [mouseY])

    return (
        <>
            <Aoao><Menu>{arrmap}</Menu></Aoao>
            <button onClick={() => { dispatch({ type: "CLEAN_ITEM" }) }} >案看看</button>
            <button onClick={() => { dispatch(fetchCityItem()) }} >查詢API</button>
        </>
    )
}

export default Example
