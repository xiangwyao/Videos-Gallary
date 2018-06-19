// @flow

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
    render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
    module.hot.accept('./App', () => {
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
