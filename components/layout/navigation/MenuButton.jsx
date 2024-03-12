export function MenuButton({ isOpen, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className="relative z-[2] mr-5 flex cursor-pointer flex-col items-center justify-center rounded-md p-3 transition-colors duration-300 ease-in-out hover:bg-gray-200 lg:hidden"
    >
      <span
        className={`block h-1 w-9 rounded-sm bg-primary-500 
                    transition-transform duration-300 ease-in-out ${
                      isOpen ? "translate-y-2 rotate-45" : "-translate-y-0.5"
                    }`}
      ></span>
      <span
        className={`my-0.5  block h-1 w-9 rounded-sm 
                    bg-primary-500 transition-opacity duration-300 ease-in-out ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
      ></span>
      <span
        className={`block  h-1 w-9 rounded-sm bg-primary-500 
                    transition-transform duration-300 ease-in-out ${
                      isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
                    }`}
      ></span>
    </div>
  );
}
