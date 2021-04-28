// const fetchCityItem = () => {
//     return (dispatch) => {
//         fetch("https://raw.githubusercontent.com/JiaAnTW/mask/master/dist.json", {
//             method: "GET"
//         })
//             .then((res) => {
//                 console.log(res);
//                 return res.json()
//             })
//             .then(data => {
//                 console.log();
//                 dispatch({
//                     type: "SET_ITEM",
//                     payload: { itemNewArr: data["cityList"] }
//                 });
//             })
//             .catch(e => {
//                 console.log(e);
//             })
//     };
// };


const fetchCityItem = () => {
    return dispatch => {
        return fetch('https://api.kcg.gov.tw/api/service/Get/b4e6ae98-39b7-469b-8c68-56492cad3b71')
            .then(res => res.json())
            .then(data => dispatch({
                type: "SET_ITEM",
                payload: { itemNewArr: data["cityList"] }
            }))
    }
}

export { fetchCityItem }