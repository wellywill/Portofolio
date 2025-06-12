import React, { useState } from "react";
import iconR from "../assets/react-svgrepo-com.svg";
import iconL from "../assets/laravel-svgrepo-com.svg";
import iconT from "../assets/tailwind.png";
import iconH from "../assets/html.png";
import iconJ from "../assets/Javascript.png";
import iconC from "../assets/css.png";

const icons = [
  { icon: iconR, label: "React", position: "-rotate-10" },
  { icon: iconL, label: "Laravel", position: "rotate-10" },
  { icon: iconT, label: "Tailwind CSS", position: "-rotate-10" },
  { icon: iconH, label: "HTML", position: "rotate-10" },
  { icon: iconJ, label: "JavaScript", position: "-rotate-10" },
  { icon: iconC, label: "CSS", position: "rotate-10" },
];

const Skill = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Untuk close tooltip jika klik di luar icon
  React.useEffect(() => {
    const handleClick = () => setActiveIdx(null);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="skill text-white p-4 text-center ">
      <h2 className="text-xl sm:text-4xl font-bold mt-4 mb-8 text-red-600 drop-shadow-lg drop-shadow-red-600/50">
        Skill
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {icons.map((data, idx) => (
          <div
            key={idx}
            className="relative flex items-center justify-center bg-red-800/50 rounded-full w-12 h-12 border border-red-500 shadow-lg shadow-red-600/50 hover:scale-105 hover:-translate-y-2 transition duration-300 ease-in-out group"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx(idx === activeIdx ? null : idx);
            }}
          >
            <img
              src={data.icon}
              alt={data.label}
              className="w-8 h-8 object-contain cursor-pointer"
            />
            <span
              className={`absolute ${
                data.position
              } border border-red-500 shadow-md shadow-red-600/50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-red-800/50 text-[10px] text-white opacity-0 group-hover:opacity-100 group-hover:animate-bounce-custom transition pointer-events-none whitespace-nowrap z-10
                ${
                  activeIdx === idx
                    ? "opacity-100 animate-bounce-custom pointer-events-none"
                    : ""
                }
              `}
            >
              {data.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
