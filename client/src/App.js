import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Restaurants from "./Components/RestaurantsPage/Restaurants";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/restaurants" component={Restaurants} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
