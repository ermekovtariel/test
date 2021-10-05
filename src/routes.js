import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Auth, Home } from './pages';
import { banks } from './store/actions/bankAction';

export const useRoutes = (isAuthed) => {
  const dispatch = useDispatch();
  const [data, setData] = useState();

  useEffect(() => {
    dispatch(banks(setData));
  }, []);

  if (isAuthed) {
    return (
      <Switch>
        <Route exact path='/home' render={() => <Home data={data} />} />
        <Redirect to='/home' />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path='/' component={Auth} />
      <Redirect to='/' />
    </Switch>
  );
};
