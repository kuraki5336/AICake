export function combineDispatchs(dispatchs) {
  return function(obj) {
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](obj);
    }
  };
}