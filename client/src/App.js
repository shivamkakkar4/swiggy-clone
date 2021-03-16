import Header from "./Components/Header/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import RestaurantsPage from "./Pages/RestaurantsPage/RestaurantsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" render={props => props.location.pathname !== "/" && <Header />} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
      </Router>
    </Provider>
  );
};

export default App;
