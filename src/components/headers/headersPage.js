import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { ContextStore } from "../../service/datapool/public";

function HeadersPage() {
  const { sHeaders, dispatch } = React.useContext(ContextStore);

  const onTabChange = (event, newValue) => {
    dispatch({ type: "onheaderChange", index: newValue });
  };

  return (
    <div>
      <Paper square>
        <Tabs
          value={sHeaders}
          indicatorColor="primary"
          textColor="primary"
          onChange={onTabChange}
          aria-label="disabled tabs example"
        >
          <Tab label="菜單" to="/intoplu">
          </Tab>

          <Tab label="聯繫我們"></Tab>
          <Tab label="作者聯繫電話"></Tab>
        </Tabs>
      </Paper>
    </div>
  );
}

export default HeadersPage;
