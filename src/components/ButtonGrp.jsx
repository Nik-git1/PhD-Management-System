import React from "react";

function ButtonGrp() {
  return (
    <div>
      <a
        class="group ml-4 items-center justify-between gap-4 rounded-full border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
        href="#"
      >
        <span class="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500">
          Add New Students
        </span>
      </a>
      <a
        class="group m-2 items-center justify-between gap-4 rounded-full border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
        href="#"
      >
        <span class="font-medium transition-colors group-hover:text-white">
          Filters
        </span>
      </a>

      <a
        class="group m-2 items-center justify-between gap-4 rounded-full border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
        href="#"
      >
        <span class="font-medium transition-colors group-hover:text-white">
          Download
        </span>
      </a>
    </div>
  );
}

export default ButtonGrp;
