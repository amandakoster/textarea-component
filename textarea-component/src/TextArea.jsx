import React, { useState } from "react";

export function TextArea() {
  const [text, setText] = useState("");

  // Example dynamic class variable
  const borderClassNames =
    text.length > 400 ? "border-red-500" : "border-neutral-500";
  const textColorClass = text.length < 500 ? "text-gray-600" : "text-red-500";
  const textAlignClass = text.length < 500 ? "justify-end" : "justify-start";

  return (
    <div className="w-96 p-4">
      <div className="flex flex-col items-start">
        <label className="mb-1 text-sm text-gray-600">Description</label>
        <textarea
          name="message"
          className={`w-full h-40 p-4 rounded-md border border-neutral-200 
            placeholder-neutral-500 focus:outline-none text-sm 
            focus:ring-1 invalid:border-red-50 text-neutral-500 
            bg-neutral-50 resize-none ${borderClassNames}`}
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
