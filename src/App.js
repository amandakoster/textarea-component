import "./App.css";
import TextArea from "./TextArea";

const maxText =
  "This text exceeds the character limit for demonstration purposes... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const errorText =
  "A little about the company and the team that you’ll be working with.";

function App() {
  return (
    <div className="flex flex-col m-4">
      <h1 className="text-red-500 text-3xl font-bold mb-8">
        A dynamic, textarea-component for React
      </h1>
      <div className="flex flex-row justify-between items-start bg-white p-4">
        <div className="flex flex-col space-y-4 w-1/2">
          <TextArea label="Normal" />
          <TextArea label="Disabled" disabled />
          <TextArea
            label="Error filled"
            errorMessage="This is an error message"
            initialText={errorText}
          />
        </div>
        <div className="flex flex-col space-y-4 w-1/2">
          <TextArea label="Char limit exceeded" initialText={maxText} />
          <TextArea
            label="Error focused"
            initialText={errorText}
            errorMessage="This is an error message"
            focused
          />
        </div>
      </div>
    </div>
  );
}

export default App;
