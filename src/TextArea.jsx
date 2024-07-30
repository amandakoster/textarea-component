import React, { useState } from "react";

export function TextArea({ label, disabled }) {
  const [text, setText] = useState("");

  const borderClassNames =
    text.length > 500
      ? "border-red-600"
      : "border-2 border-neutral-100 focus:border-indigo-700";

  const textColorClass =
    text.length < 500
      ? "font-normal text-sm text-neutral-900"
      : "font-normal text-sm text-red-600";

  const disabledPlaceholderClass = disabled
    ? "placeholder:text-neutral-300"
    : "";

  return (
    <div className="h-[180px] w-[465px] flex flex-col gap-1.5">
      <div className="flex flex-col gap-1.5 self-stretch grow">
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
        />

        <div className="w-full flex justify-between mt-1">
          {text.length >= 500 ? (
            <span className={`text-sm ${textColorClass}`}>
              Maximum characters are 500
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
