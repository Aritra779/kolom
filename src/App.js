import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Body/Home/Home";
import About from "./components/Body/About/About";
import Archive from "./components/Body/Archive/Archive";

function App() {
  return (
    <>
          <Navbar />
          <div>
              <Switch>
                  <Route exact path={["/", "/home"]} component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/archive" component={Archive} />
              </Switch>
          </div>
          <Footer/>
    </>
  );
}

export default App;
