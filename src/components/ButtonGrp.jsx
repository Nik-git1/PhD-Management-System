import React from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const buttons = [
  {
    name: "Filters",
    href: "#",
    icon: FilterAltIcon,
  },
  {
    name: "Download",
    href: "#",
    icon: ArrowDownwardIcon,
  },
];

function ButtonGrp() {
  return (
    <div className="flex justify-between ml-4 mr-4">
      <div>
        <a
          class="group items-center justify-between gap-4 rounded-full border border-pantone-blue bg-pantone-blue px-5 py-3 transition-colors hover:bg-pantone-cool-gray-9 focus:outline-none focus:ring"
          href="#"
        >
          <PersonAddAlt1Icon style={{ color: "white" }} />
          <span class="ml-2 font-medium text-white transition-colors hidden md:inline-block">
            Add New Students
          </span>
        </a>
      </div>
      <div>
        {buttons.map((btn) => (
          <a
            class="group mx-2 items-center justify-between gap-4 rounded-full border border-current px-5 py-3 text-pantone-blue transition-colors hover:bg-pantone-blue focus:outline-none focus:ring active:bg-pantone-blue"
            href={btn.href}
          >
            <span class="font-medium transition-colors group-hover:text-white">
              <btn.icon />
              <span className="hidden md:inline-block ml-2">{btn.name}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ButtonGrp;
