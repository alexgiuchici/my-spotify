import { Route, Switch } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Callback from "./pages/Callback/Callback";
import Categories from "./pages/Categories/Categories";
import {isTokenValid} from './utils/utils' 
import './App.css';

function App() {
  const publicRoutes = (
    <div className="App">
        <Switch>
            <Route
                path="/"
                exact={true}
                component={Login}
            />
            <Route
                path="/login"
                component={Login}
            />
            {/* Authentication */}
            <Route
                path="/callback"
                component={Callback}
            />
            {/* 404 */}
            <Route component={NotFound} />
        </Switch>
    </div>
  );
  const authenticatedRoutes = (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/login"
          component={Login}
        />
        <Route
            path="/home"
            component={Home}
        />
        <Route
            path="/contact"
            component={Contact}
        />
        <Route
            path="/categories"
            component={Categories}
        />
        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );

  let displayedRoutes;
  if (isTokenValid()) {
    displayedRoutes = authenticatedRoutes;
  } else {
    displayedRoutes = publicRoutes;
  }

  return <>{displayedRoutes}</>;
}

export default App;
