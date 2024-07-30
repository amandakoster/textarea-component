import "./App.css";
import TextArea from "./TextArea";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-red-500 text-3xl font-bold mb-20">
        A textarea-component for React
      </h1>
      <TextArea label="Normal" />
      <TextArea label="With label" />
      <TextArea label="With label and error" />
      <TextArea label="Disabled" disabled />
    </div>
  );
}

export default App;
