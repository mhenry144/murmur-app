import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          {/* ROUTES */}
          <Route />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
