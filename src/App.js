import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Navigation, About } from "./components";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <header>
              <Navigation />
          </header>

          <Switch>
              <Route path="/about" exact component={() => <About />} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;