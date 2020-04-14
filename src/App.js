import React from "react";
import { hot } from "react-hot-loader";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { About } from "./pages/about.js";
import { Contact } from "./pages/contact.js";
import { EventsNext } from "./pages/events-next.js";
import { EventsPrev } from "./pages/events-prev.js";
import { Footer } from "./pages/footer.js";
import { Header } from "./pages/header.js";
import { Home } from "./pages/home.js";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Redirect from="" to="/inicio" />
      <Route path="*">
        <Container />
      </Route>
    </BrowserRouter>
  );
};

const Container = () => {
  const location = useLocation();
  return (
    <TransitionGroup className="position-relative">
      <CSSTransition key={location.key} timeout={500} classNames="pagefadein">
        <section className="position-absolute w-100 top-0 left-0">
          <Switch location={location}>
            <Route path="/inicio" component={Home} />
            <Route path="/nosotros" component={About} />
            <Route path="/eventos-proximos" component={EventsNext} />
            <Route path="/eventos-anteriores" component={EventsPrev} />
            <Route path="/contacto" component={Contact} />
          </Switch>
          <Footer />
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default hot(module)(App);
