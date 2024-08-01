import "./App.css";
import TextArea from "./TextArea";

const maxText =
  "This text exceeds the character limit for demonstration purposes... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white pb-40">
      <h1 className="text-red-500 text-3xl font-bold mb-20">
        A dynamic, textarea-component for React
      </h1>
      <TextArea />
      <TextArea label="With Label" />
      <TextArea label="Focused (manually set)" focused />
      <TextArea label="Disabled" disabled className="mb-2" />
      <TextArea
        label="With label and default character limit error message (manually set)"
        initialText={maxText}
      />
      <TextArea
        label="With label and custom error message (manually set)"
        errorMessage="This is an error message"
        initialText={maxText}
      />
    </div>
  );
}

export default App;
