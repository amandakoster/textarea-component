import "./App.css";
import { TextArea } from "./TextArea";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-red-500 text-3xl font-bold mb-20">
        A textarea-component for React
      </h1>
      <TextArea />
    </div>
  );
}

export default App;
