"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Icon from "./Icon/Icon";

export default function Accordion({ question, content }) {
  const MotionIcon = motion(Icon);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details className="w-full open:h-28">
      <summary
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer list-none flex-row items-center border-t border-gray-200 bg-gray-50 px-2 py-3 font-semibold in-open:mb-2 in-open:border-[#1E88E5]"
      >
        <AnimatePresence>
          <MotionIcon
            layout
            initial={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 45 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            name="icon-plus"
            style={{ fontSize: "1.9rem" }}
            color="#000"
          ></MotionIcon>
        </AnimatePresence>
        {question}
      </summary>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <p className="text-md font-light">{content}</p>
      </div>
    </details>
  );
}
