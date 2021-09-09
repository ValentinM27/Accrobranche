import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Navigation, About, Activities, Contact, Routes } from "./components";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <header>
              <Navigation />
          </header>

          <Switch>
              <Route path="/about" exact component={() => <About />} />
              <Route path="/routes" exact component={() => <Routes />} />
              <Route path="/activities" exact component={() => <Activities />} />
              <Route path="/contact" exact compoennt={() => <Contact />} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;