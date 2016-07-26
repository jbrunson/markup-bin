import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
    // Render the Blaze accounts form, then find the div we
    // just rendered in the 'render' method and place the 
    // Blaze accounts from in that div
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container">
      </div>
    );
  }
}

export default Accounts;