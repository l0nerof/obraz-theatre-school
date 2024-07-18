import Carousel from "./Carousel";
import Logo from "./Logo";
import Promo from "./Promo";
import Rights from "./Rights";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="bg-black pb-6">
      <Carousel className="bg-primary mb-6">
        <Promo />
      </Carousel>

      <div className="max-w-[1296px] mx-auto flex items-center justify-between gap-6">
        <Logo width="w-[200px]" height="h-9" className="basis-1/3" />
        <Rights />
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
