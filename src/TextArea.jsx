import React, { useEffect, useState } from "react";

export function TextArea({
  label,
  disabled,
  focused: propFocused,
  errorMessage,
  initialText,
}) {
  const [text, setText] = useState(initialText || "");
  const [focused, setFocused] = useState(propFocused || false);

  useEffect(() => {
    setFocused(propFocused);
  }, [propFocused]);

  const borderClassNames =
    text.length > 500 || errorMessage
      ? "border-red-600"
      : `border-2 border-neutral-100 ${focused && "border-indigo-700"}`;

  const textColorClass =
    text.length < 500 && !errorMessage
      ? "font-normal text-sm text-neutral-900"
      : "font-normal text-sm text-red-600";

  const disabledPlaceholderClass = disabled
    ? "placeholder:text-neutral-300"
    : "";

  return (
    <div className="h-[180px] w-[465px] flex flex-col gap-2 my-2">
      <div className="flex flex-col gap-2 self-stretch grow">
        {label && (
          <label className="mb-1 font-medium text-neutral-700">{label}</label>
        )}
        <textarea
          name="message"
          disabled={disabled}
          minLength="1"
          maxLength="500"
          className={`flex gap-2 self-stretch grow bg-neutral-50 px-3.5 py-3 rounded-lg resize-none ${borderClassNames} ${disabledPlaceholderClass} focus:outline-none`}
          placeholder={disabled ? "Disabled" : "Write your message..."}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        <div className="w-full flex justify-between mt-1">
          {text.length >= 500 && !errorMessage ? (
            <span className={`text-sm ${textColorClass} ml-auto`}>
              {text.length}/500
            </span>
          ) : (
            <span className={`text-sm ${textColorClass}`}>{errorMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextArea;
