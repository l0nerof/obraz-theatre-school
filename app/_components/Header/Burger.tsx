import BurgerContacts from "./BurgerContacts";
import BurgerNavigation from "./BurgerNavigation";
import BurgerSocials from "./BurgerSocials";

interface IBurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

function Burger({ onClick, isOpen }: IBurgerProps) {
  return (
    <div
      className={`absolute bg-secondary w-full h-screen z-10 xl:hidden lg:top-[84px] md:top-[76px] sm:top-[72px] transition-transform duration-300 origin-right ${
        isOpen ? "scale-x-100" : "scale-x-0"
      }`}
    >
      <div className="lg:max-w-[704px] md:max-w-[448px] sm:max-w-[272px] mx-auto py-16">
        <BurgerNavigation onClick={onClick} />
        <BurgerSocials />
        <BurgerContacts />
      </div>
    </div>
  );
}

export default Burger;
