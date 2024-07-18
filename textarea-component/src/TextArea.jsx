import React, { useState } from "react";

export function TextArea() {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(e.target.value.length);
  };
  return (
    <div className="w-96 p-4">
      <div className="flex flex-col items-start">
        <label className="mb-1 text-sm text-gray-800">Description</label>
        <textarea
          name="message"
          className="w-full h-40 p-4 rounded-md border border-neutral-200 
              placeholder-neutral-500 focus:outline-none text-sm 
              focus:ring-1 invalid:border-red-50 text-neutral-500 
              bg-neutral-50 resize-none"
          placeholder="Write your message..."
          maxLength="500"
          onChange={handleChange}
        />
        <div className="w-full flex justify-end mt-1">
          <span className="text-sm text-gray-600">{count}/500</span>
        </div>
      </div>
    </div>
  );
}
