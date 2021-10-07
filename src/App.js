import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

//hoc
import { compose } from "redux";

import Theme from "./assets/themes/Theme";
import { ThemeProvider } from "@material-ui/core/styles";


import Page1 from "./views/pages/page1/Page1";
import Page2 from "./views/pages/page2/Page2";
import Page3 from "./views/pages/Page3";
import Page4 from "./views/pages/Page4";
import Page5 from "./views/pages/Page5";
import Page6 from "./views/pages/Page6";
import Page7 from "./views/pages/Page7";
import Page8 from "./views/pages/Page8";
import Page9 from "./views/pages/Page9";

import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={Theme}>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={(Page1)}
            />
            <Route
              exact
              path="/page2"
              component={(Page2)}
            />
            <Route
              exact
              path="/page3"
              component={(Page3)}
            />
            <Route
              exact
              path="/page4"
              component={(Page4)}
            />
            <Route
              exact
              path="/page5"
              component={(Page5)}
            />
            <Route
              exact
              path="/page6"
              component={(Page6)}
            />
            <Route
              exact
              path="/page7"
              component={(Page7)}
            />
            <Route
              exact
              path="/page8"
              component={(Page8)}
            />
            <Route
              exact
              path="/page9"
              component={(Page9)}
            />
          </Switch>
        </div>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
