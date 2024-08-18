interface IBurgerButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

function BurgerButton({ onClick, isOpen }: IBurgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex-col justify-center items-center border border-primary px-2 py-3 rounded-full hidden xl:hidden lg:flex md:flex sm:flex"
    >
      <span
        className={`bg-primary block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
      ></span>
      <span
        className={`bg-primary block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
      ></span>
      <span
        className={`bg-primary block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
      ></span>
    </button>
  );
}

export default BurgerButton;
