import React from "react";

export class App extends React.Component() {
  render() {
    return (
      <div>
        <Header />
        <Greating />
      </div>
    );
  }
}
export class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome , {this.username}</p>
      </header>
    );
  }
}
