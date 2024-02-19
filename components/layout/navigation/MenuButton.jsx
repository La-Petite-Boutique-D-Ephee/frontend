export function MenuButton({ isOpen, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className="flex justify-center items-center flex-col hover:bg-gray-200 transition-colors duration-300 ease-in-out cursor-pointer p-3 rounded-md relative z-[2] lg:hidden mr-5"
    >
      <span
        className={`bg-primary-500 block transition-transform duration-300 ease-in-out 
                    h-1 w-9 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"
                    }`}
      ></span>
      <span
        className={`bg-primary-500  block transition-opacity duration-300 ease-in-out 
                    h-1 w-9 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
      ></span>
      <span
        className={`bg-primary-500  block transition-transform duration-300 ease-in-out 
                    h-1 w-9 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
      ></span>
    </div>
  );
}
