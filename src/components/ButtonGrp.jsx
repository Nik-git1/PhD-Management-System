import React from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function ButtonGrp() {
  return (
    <div className="flex justify-between ml-4 mr-4">
      <div>
        <a
          class="group items-center justify-between gap-4 rounded-full border border-pantoneblue bg-pantoneblue px-5 py-3 transition-colors hover:bg-pantonecoolgrey9 focus:outline-none focus:ring"
          href="#"
        >
          <PersonAddAlt1Icon style={{ color: "white" }} />
          <span class="ml-2 font-medium text-white transition-colors">
            Add New Students
          </span>
        </a>
      </div>
      <div>
        <a
          class="group mx-2 items-center justify-between gap-4 rounded-full border border-current px-5 py-3 text-pantoneblue transition-colors hover:bg-pantoneblue focus:outline-none focus:ring active:bg-pantoneblue"
          href="#"
        >
          <span class="font-medium transition-colors group-hover:text-white">
            <FilterAltIcon className="mr-2" />
            Filters
          </span>
        </a>

        <a
          class="group mx-2 items-center justify-between gap-4 rounded-full border border-current px-5 py-3 text-pantoneblue transition-colors hover:bg-pantoneblue focus:outline-none focus:ring active:bg-pantoneblue"
          href="#"
        >
          <span class="font-medium transition-colors group-hover:text-white">
            <ArrowDownwardIcon className="mr-2" />
            Download
          </span>
        </a>
      </div>
    </div>
  );
}

export default ButtonGrp;
