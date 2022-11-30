import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import TodoListPage from "./ListPage";
import TodoDetailPage from "./DetailPage";
import NotFound from "../../../components/NotFound";

TodoFeature.propTypes = {};

function TodoFeature() {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={TodoListPage} exact/>
        <Route path={`${match.path}/:todoId`} component={TodoDetailPage} exact/>

        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default TodoFeature;