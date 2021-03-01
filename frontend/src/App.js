import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormModal from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (!sessionUser) {
    return (
      <>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path="/home">
              <HomePage/>
            </Route>
            {/* <Route path="/signup">
              <SignupFormModal />
            </Route> */}
            <Redirect to="/home"/>
          </Switch>
        )}
      </>
    );
  } else {
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
          {/* <Route exact path="/home">
            <HomePage/>
          </Route> */}
          <Route path="/main">
            <MainPage/>
          </Route>
          <Redirect to="/main"/>
        </Switch>
      )}
    </>
  );
 }
}

export default App;
