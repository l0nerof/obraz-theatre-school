import Carousel from "../ui/Carousel";
import Contacts from "./Contacts";
import Logo from "../ui/Logo";
import Navigation from "./Navigation";
import Promo from "../ui/Promo";

function Header() {
  return (
    <header className="bg-black pt-3">
      <div className="max-w-[1296px] mx-auto flex items-center justify-between gap-6 xl:max-w-[928px] lg:max-w-[704px] md:max-w-[448px] sm:max-w-[272px]">
        <Contacts />
        <Logo className="basis-5/12 w-[360px] h-16 xl:w-[270px] xl:h-12 xl:basis-4/12 lg:w-[270px] lg:h-12 lg:basis-6/12 md:w-[227px] md:h-10 sm:w-[180px] sm:h-8" />
        <Navigation />
      </div>

      <Carousel className="bg-primary mt-6">
        <Promo />
      </Carousel>
    </header>
  );
}

export default Header;
