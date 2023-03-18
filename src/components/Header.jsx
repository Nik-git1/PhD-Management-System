import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoutIcon from "@mui/icons-material/Logout";

const links = [
  {
    name: "Student Logbook",
    href: "#/student_logbook",
  },
  {
    name: "Database",
    href: "#",
  },
  {
    name: "Exam Invigilation Allotment",
    href: "#/exam_invigilation",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white w-screen">
      <nav
        className="mx-auto flex w-full items-center justify-between px-6 pb-6 pt-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">IIITD</span>
            <img className="h-14 w-auto" src="/iiitd_logo.png" alt="IIITD" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-pantone-gray-4"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 text-pantone-gray-5 ">
          {links.map((link) => (
            <a
              href={link.href}
              className="font-semibold leading-6 hover:text-pantone-blue transition-colors hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="font-semibold leading-6 text-pantone-gray-5 hover:text-red-600 transition-colors hover:scale-105"
          >
            Logout
            <LogoutIcon className="ml-1 mb-0.5 scale-75" />
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div></div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/50">
              <div className="space-y-2 py-6">
                {links.map((link) => (
                  <a
                    href={link.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-pantone-gray-5 hover:text-pantone-blue transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-pantone-gray-5 hover:text-red-600 transition-colors"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
