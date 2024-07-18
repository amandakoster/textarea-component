import logo from "./logo.svg";
import "./App.css";
import { TextArea } from "./TextArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="text-3xl font-bold underline">
          A textarea-component for React
        </h1>
        <TextArea />
      </header>
    </div>
  );
}

export default App;
