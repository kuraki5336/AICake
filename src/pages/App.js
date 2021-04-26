import React, { useReducer, useState, lazy, Suspense } from "react";
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

/** reducer */
import { itemStore } from "../model/store";
import { Provider } from 'react-redux';

/** 第三方套件 */

const LazyPage = lazy(() => import('./lazy/Lazy'));
const FormPage = () => {
  return <Suspense fallback={<div>Loading...</div>}>
    <LazyPage />
  </Suspense>;
}

function App() {
  const [headerState, header_dispatch] = useReducer(headerReducer, 0);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Provider store={itemStore}>
      <>
        <HeadersPage></HeadersPage>
        <Route path="/" exact component={ContentPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/intoplu" component={IntoPluPage} />
        <Route path="/example" component={ExamplePage} />
        <Route path="/lazy" component={FormPage} />
      </>
    </Provider >
  );
}

export default App;
