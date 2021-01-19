import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Restaurants from "./Components/RestaurantsPage/Restaurants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/restaurants" component={Restaurants} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
