import React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Landing from "./Landing";
import Search from "./Search";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));

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
