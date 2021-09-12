import './styles/Global.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Home, Navigation, About, Activities, Contact, Routes, Footer, Legal, Confidential} from "./components";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <header>
              <Navigation />
          </header>

          <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/routes" exact component={() => <Routes />} />
              <Route path="/activities" exact component={() => <Activities />} />
              <Route path="/contact" exact component={() => <Contact />} />
              <Route path="/confidential" exact component={() => <Confidential />} />
              <Route path="/legal" exact component={() => <Legal />} />
          </Switch>

          <footer>
              <Footer />
          </footer>
      </HashRouter>
    </div>
  );
}

export default App;