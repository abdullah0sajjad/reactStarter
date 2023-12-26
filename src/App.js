import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./scss/index.scss";
// import Store from "./store";
// import { Provider } from "react-redux";
import Home from "./components/Home";

function App() {
  return (
    // <Provider store={Store}>
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
      </Routes>
    </Router>
    // </Provider>
  );
}

export default App;
