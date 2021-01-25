import logo from './logo.svg';
import './App.css';
import { Carousel} from './carasoul';
import {Parent} from './Parent';
import ReactPlayer from "react-player";
function App() {
  return (
    <div className="App">
      {
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Ok edied the same file.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Parent></Parent>
        { /* <ReactPlayer
        url="https://youtu.be/rMveRF-BYac"
        controls="true"
        playing="true"
        controls="true"
        /> */} 
      <div> </div>

      </div>
      // <Carousel/>    
      }
    </div>
  );
}

export default App;
