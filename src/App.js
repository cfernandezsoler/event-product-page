import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
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
      <Container />
    </BrowserRouter>
  );
};

const Container = () => {
  const location = useLocation();
  const allLinks = [
    "nosotros",
    "eventos-proximos",
    "eventos-anteriores",
    "contacto",
  ];
  const loc =
    location.pathname[location.pathname.length - 1] == "/"
      ? location.pathname.slice(0, location.pathname.length - 1)
      : location.pathname;
  let startLink = loc;
  const linkMatchArr = allLinks.filter((item) => startLink.match(item));
  const linkMatchItem = linkMatchArr.length > 0 ? linkMatchArr[0] : "inicio";

  if (linkMatchArr.length > 0) {
    startLink = startLink.split("/");
    startLink.pop();
    startLink = startLink.join("/");
  }
  return (
    <div>
      <Header startLink={startLink} linkMatchItem={linkMatchItem} />
      <TransitionGroup className="position-relative">
        <CSSTransition key={location.key} timeout={500} classNames="pagefadein">
          <section className="position-absolute w-100 top-0 left-0">
            <Switch location={location}>
              <Route
                path={`${startLink}/`}
                exact
                render={() => <Home startLink={startLink} />}
              />
              <Route path={`${startLink}/nosotros`} component={About} />
              <Route
                path={`${startLink}/eventos-anteriores`}
                component={EventsPrev}
              />
              <Route
                path={`${startLink}/eventos-proximos`}
                render={() => <EventsNext startLink={startLink} />}
              />
              <Route path={`${startLink}/contacto`} component={Contact} />
            </Switch>
            <Footer />
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default hot(module)(App);
