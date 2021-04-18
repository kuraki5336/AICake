import React, { useReducer } from "react";
import { Route } from "react-router-dom";
/** 元件 */
import HeadersPage from "../components/headers/headersPage";
/** 頁面 */
import ContentPage from "./content/contentPage";
import ContactPage from "./contact/contactPage";
import IntoPluPage from "./intoplu/intoPluPage";
/** libfunc */
import { combineDispatchs } from "../utils/common";
/** datapool  */
import { ContextStore, headerReducer } from "../service/datapool/public";
/** 第三方套件 */

function App() {
  const [headerState, header_dispatch] = useReducer(headerReducer, 0);

  return (
    <ContextStore.Provider
      value={{
        sHeaders: headerState,
        dispatch: combineDispatchs([header_dispatch]),
      }}
    >
      <div>
        <HeadersPage></HeadersPage>
          <Route path="/" exact component={ContentPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/intoplu" component={IntoPluPage} />
      </div>
    </ContextStore.Provider>
  );
}

export default App;
