"use client";

import { ChangeEvent, useState } from "react";

export default function Input({ label, type, id, placeholder, isRequired }) {
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  return (
    <div role="group" aria-label={`${label} 영역`} className="flex flex-col">
      <label htmlFor={id} className="mb-[1px] font-semibold">
        {label}
      </label>
      {/* {isRequired && } */}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputVal}
        className="rounded-sm border border-gray-400 p-2 text-sm outline-[#4FD5FF] focus:bg-[#F2F6F8]/68 focus:outline"
        onChange={handleInputChange}
      />
    </div>
  );
}
