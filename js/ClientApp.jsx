// @flow

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Perf from 'react-addons-perf';
import App from "./App";

// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  render(
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path={`/`} render={() => <App />} />
      </div>
    </Router>,
    document.getElementById("app")
  );
};
renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}

// const MyTitle = function MyTitle(props) {
//   return (
//     <div style={{ color: props.color }}>
//       <h1>
//         {props.title}
//       </h1>
//     </div>
//   );
// };
// const MyFirstComponent = function MyFirstComponent() {
//   // return (<h1>My First React</h1>);
//   return (
//     <div>
//       <MyTitle title="Game of Thrones" color="YellowGreen" />
//       <MyTitle title="Stranger Things" color="GreenYellow" />
//       <MyTitle title="House of Cards" color="Peru" />
//       <MyTitle title="The Americans" color="burlywood" />
//     </div>
//   );
// };
// render(<MyFirstComponent />, document.getElementById("app"));
