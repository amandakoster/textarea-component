import React, { useEffect, useState } from "react";
import classNames from "classnames";

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

  const borderClassNames = classNames({
    "border-2": true,
    "border-red-600": text.length > 500,
    "border-neutral-100": text.length <= 500 && !focused,
    "border-indigo-700": focused,
    "focus:border-indigo-700": true,
  });

  const textColorClass =
    text.length < 500 && !errorMessage
      ? "font-normal text-neutral-900"
      : "font-normal text-red-600";

  const disabledPlaceholderClass = disabled
    ? "placeholder:text-neutral-300"
    : "";

  return (
    <div className="h-[160px] w-[475px] font-noto flex flex-col gap-2 my-2">
      <div className="flex flex-col gap-2 self-stretch grow">
        {label && (
          <label className="mb-1 font-medium text-neutral-900">{label}</label>
        )}
        <textarea
          name="message"
          disabled={disabled}
          minLength="1"
          className={`h-[108px] w-[475px] text-sm flex gap-2 bg-neutral-50 p-2 rounded-lg resize-none overflow-hidden ${borderClassNames} ${disabledPlaceholderClass} focus:outline-none`}
          placeholder={disabled ? "Disabled" : "Write your message..."}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        <div className="w-full flex justify-between mt-1">
          {text.length >= 500 || errorMessage ? (
            <span className={`text-sm ${textColorClass}`}>
              {errorMessage || "Maximum characters are 500"}
            </span>
          ) : (
            <span className={`text-sm ${textColorClass} ml-auto`}>
              {text.length}/500
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextArea;
