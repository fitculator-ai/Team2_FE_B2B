"use client";

import Icon from "./Icon/Icon";

export default function Input({
  register,
  label,
  type,
  id,
  placeholder,
  isRequired,
  name,
}) {
  return (
    <div role="group" aria-label={`${label} 영역`} className="flex flex-col">
      <label htmlFor={id} className="mb-[1px] inline font-semibold">
        {label}
        {isRequired && (
          <Icon
            name="icon-point"
            fontSize={0.7}
            color="#F11E1E"
            style={{ paddingLeft: "2px" }}
          ></Icon>
        )}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-sm border border-gray-400 p-2 text-sm outline-[#1E88E5] focus:bg-[#F2F6F8]/68 focus:outline"
        {...register(name, { required: isRequired })}
      />
    </div>
  );
}
