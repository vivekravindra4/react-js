import React from 'react';
import AjaxApp from "./ajax";
import LocalQuoteApp from "./local-quote";
import AddQuoteApp from "./add-quote";
import ListQuotesApp from "./list-quotes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <div>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">DCT ACADEMY</h4>
            <span className="text-muted">Made With Love &lt;3 :* !</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav">
              <li className="nav-item"> <Link className="nav-item nav-link" to="/"> Random Quote (Ajax API) </Link> </li>
              <li className="nav-item"> <Link className="nav-item nav-link" to="/random/"> Random Quote (Local) </Link> </li>
              <li className="nav-item"> <Link className="nav-item nav-link" to="/add/"> Add Quote (Local) </Link> </li>
              <li className="nav-item"> <Link className="nav-item nav-link" to="/list/"> List All Quotes (Local) </Link> </li>
            </ul>
          </nav>
        </nav>
      </div>

      <Route path="/" exact component={AjaxApp} />
      <Route path="/random/" component={LocalQuoteApp} />
      <Route path="/add/" component={AddQuoteApp} />
      <Route path="/list/" component={ListQuotesApp} />
    </div>
  </Router>
);

export default AppRouter;