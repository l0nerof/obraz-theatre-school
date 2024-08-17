import Carousel from "../ui/Carousel";
import Logo from "../ui/Logo";
import Promo from "../ui/Promo";
import Rights from "./Rights";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="bg-black pb-6">
      <Carousel className="bg-primary mb-6">
        <Promo />
      </Carousel>

      <div className="max-w-[1296px] mx-auto flex items-center justify-between gap-6 xl:max-w-[904px] lg:max-w-[704px] md:max-w-[448px] sm:max-w-[272px] sm:flex-col">
        <Logo className="basis-1/3 w-[200px] h-9 xl:basis-0 lg:basis-0 md:basis-0" />
        <Rights />
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
