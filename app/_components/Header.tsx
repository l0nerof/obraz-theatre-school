import Carousel from "./Carousel";
import Contacts from "./Contacts";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="bg-black pt-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <Contacts />
        <Logo height="h-16" width="w-[360px]" className="basis-5/12" />
        <Navigation />
      </div>

      <Carousel className="bg-primary mt-6" />
    </header>
  );
}

export default Header;
