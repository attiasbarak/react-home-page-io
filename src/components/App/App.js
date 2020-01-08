import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";

import { PagesContext } from "../../contexts/PagesContext";

const App = () => {
  const { pages } = useContext(PagesContext);
  document.title = "Useless Website.io";

  return (
    <main className="mt-5">
      <header>
        <NavBar />
      </header>
      
      <section>
        <Switch>
          {pages.map(page => (
            <Route
              exact
              path={page.url}
              key={page.page}
              component={page.content}
            />
          ))}

          {/* 404 page*/}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </section>

      <Footer />
    </main>
  );
};

export default App;
