import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router";

function HeadersPage() {
  let history = useHistory();
  const dispatch = useDispatch();
  const $header = useSelector(state => {
    return state.storeHeader
  });

  const onTabChange = (event, newValue) => {
    dispatch({
      type: 'change',
      payload: newValue
    });

    switch (newValue) {
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/contact");
        break;
      case 2:
        history.push("/intoplu");
        break;
      case 3:
        history.push("/example");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Paper square>
        <Tabs
          value={$header.stateidnex}
          indicatorColor="primary"
          textColor="primary"
          onChange={onTabChange}
          aria-label="disabled tabs example"
        >
          <Tab label="菜單" >
          </Tab>

          <Tab label="聯繫我們"></Tab>
          <Tab label="作者聯繫電話"></Tab>
          <Tab label="練習用"></Tab>
        </Tabs>
      </Paper>
    </div>
  );
}

export default HeadersPage;
