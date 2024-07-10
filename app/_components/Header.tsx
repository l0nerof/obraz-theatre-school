import Contacts from "./Contacts";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="bg-black py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <Contacts />
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
