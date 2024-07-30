import React, { useState } from "react";

import "./App.css";

export function TextArea({ label }) {
  const [text, setText] = useState("");

  // Example dynamic class variable

  // const errorBorder = "border-red-500";
  // const normalBorder = "border-neutral-200";
  // const focusBorder = "focus:border-blue-500";

  const borderClassNames =
    text.length > 500
      ? "border-red-600"
      : "border-neutral-900 focus:border-indigo-700 custom-focus-border";

  const textColorClass =
    text.length < 500
      ? "font-normal text-sm text-neutral-900"
      : "font-normal text-sm text-red-600";

  // const textAlignClass = text.length < 500 ? "justify-end" : "justify-start";

  return (
    <div className="h-[180px] w-[465px] flex flex-col gap-1.5">
      <div className="flex flex-col gap-1.5 self-stretch grow">
        {label && (
          <label className="mb-1 font-medium text-sm text-neutral-700">
            {label}
          </label>
        )}
        <textarea
          name="message"
          className={`flex gap-2 self-stretch grow bg-neutral-50 px-3.5 py-3 rounded-lg resize-none border ${borderClassNames} focus:ring focus:ring-indigo-700 focus:outline-none`}
          placeholder="Write your message..."
          maxLength="500"
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
