import "./App.css";
import TextArea from "./TextArea";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-red-500 text-3xl font-bold mb-20">
        A dynamic, textarea-component for React
      </h1>
      <TextArea label="Default" />
      <TextArea label="Focused (manually set)" focused />
      <TextArea label="Disabled" disabled />
      <TextArea label="With label" />
      <TextArea label="With label and error" />
    </div>
  );
}

export default App;
