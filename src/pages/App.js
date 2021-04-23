import React, { useReducer, useState } from "react";
import { Route } from "react-router-dom";
/** 元件 */
import HeadersPage from "../components/headersPage";
/** 頁面 */
import ContentPage from "./content/contentPage";
import ContactPage from "./contact/contactPage";
import IntoPluPage from "./intoplu/intoPluPage";
import ExamplePage from "./example/Example";
/** libfunc */
import { combineDispatchs } from "../utils/common";
/** datapool  */
import { ContextStore, headerReducer } from "../service/datapool/public";
/** 第三方套件 */

function App() {
  const [headerState, header_dispatch] = useReducer(headerReducer, 0);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <ContextStore.Provider
      value={{
        sHeaders: headerState,
        dispatch: combineDispatchs([header_dispatch]),
        openContext: isOpen,
        setOpenContext: setIsOpen
      }}
    >
      <div>
        <HeadersPage></HeadersPage>
        <p>56789</p>
        <Route path="/" exact component={ContentPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/intoplu" component={IntoPluPage} />
        <Route path="/example" component={ExamplePage} />
      </div>
    </ContextStore.Provider>
  );
}

export default App;
