import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Login from "./components/login/login";

const App = ({authService}) => {
  return <Login authService = {authService}/>;
};

export default App;
