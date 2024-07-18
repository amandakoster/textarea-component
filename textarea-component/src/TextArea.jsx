import React from "react";

export function TextArea() {
  return (
    <div className="flex flex-col items-start">
      <label className="mb-1 text-sm text-gray-600">Description</label>
      <textarea
        name="message"
        className="w-96 h-40 p-4 rounded-md mx-4 my-1 border border-1 border-neutral-200 placeholder-neutral-500 focus:outline-none text-sm focus:ring-1 invalid:border-red-50 text-left text-neutral-500 bg-neutral-50 resize-none"
        placeholder="Write your message..."
        maxLength="500"
      />
    </div>
  );
}
