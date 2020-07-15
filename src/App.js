import React from 'react'; // allows me to write in JSX
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the Dogs</li>
      </ul>
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return(
//       <div className="App">
//         <h1>Hello Dojo!</h1>
//         <h2>Things I need to do:</h2>
//         <ul>
//           <li>Learn React</li>
//           <li>Climb Mt. Everest</li>
//           <li>Run a marathon</li>
//           <li>Feed the Dogs</li>
//         </ul>
//       </div>
//     )
//   }
// }

export default App;
