`# TextArea Component

The `TextArea` component is a customizable, controlled text area input field built using React. It includes features such as character count, error handling, focus management, and support for disabling the input.

## Features

- **Controlled Input**: The component manages the text input state internally, with support for an initial text value.
- **Character Count**: Displays a character count that changes color when the maximum limit of 500 characters is reached.
- **Error Handling**: Shows an error message if provided, or a default message if the character limit is exceeded.
- **Focus Management**: Handles focus states, allowing for custom border styles when the input is focused.
- **Disabled State**: The text area can be disabled, which alters its appearance and placeholder text.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/text-area-component.git
   cd text-area-component `

   ```

1. **Install dependencies:**

   bash

   Copy code

   `npm install`

## Usage

To use the `TextArea` component in your project, import it and include it in your JSX:

jsx

Copy code

```import React from "react";
import TextArea from "./TextArea";

function App() {
return (

<div className="App">
<TextArea
        label="Your Message"
        initialText=""
        disabled={false}
        focused={false}
        errorMessage=""
      />
</div>
);
}

export default App;
```

## Props

The `TextArea` component accepts the following props:

- **label** (string): The label for the text area.
- **disabled** (boolean): Disables the text area input if set to `true`.
- **focused** (boolean): Sets the initial focus state of the text area.
- **errorMessage** (string): Displays an error message below the text area. If not provided, the character count will be shown instead.
- **initialText** (string): The initial text to be displayed in the text area.

## Example

jsx

Copy code

`<TextArea
  label="Comment"
  initialText="This is an example comment."
  disabled={false}
  focused={true}
  errorMessage=""
/>`

This example creates a `TextArea` component with a label "Comment", an initial text value, and a focus state. The component is not disabled and does not display an error message.

## Styling

The component uses the following CSS classes:

- **Base styles**: The component uses Tailwind CSS classes for padding, margins, font, and background color.
- **Border styles**: Border color changes based on the focus state and character length.
- **Text styles**: Text color changes based on the error state or character length.

## Customization

You can customize the `TextArea` component by passing different props or by modifying the underlying CSS classes to match your application's design.
