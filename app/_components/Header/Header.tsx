"use client";

import { useEffect, useState } from "react";

import Carousel from "../ui/Carousel";
import Contacts from "./Contacts";
import Logo from "../ui/Logo";
import Navigation from "./Navigation";
import Promo from "../ui/Promo";
import BurgerButton from "./BurgerButton";
import Burger from "./Burger";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const lockScroll = () => {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    };

    const unlockScroll = () => {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };

    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [isOpen]);

  return (
    <header className="bg-black pt-3">
      <div className="max-w-[1296px] mx-auto flex items-center justify-between gap-6 xl:max-w-[928px] lg:max-w-[704px] md:max-w-[448px] sm:max-w-[272px]">
        <Contacts />
        <Logo className="basis-5/12 w-[360px] h-16 xl:w-[270px] xl:h-12 xl:basis-4/12 lg:w-[270px] lg:h-12 lg:basis-5/12 md:w-[227px] md:h-10 sm:w-[180px] sm:h-8" />
        <Navigation />

        <BurgerButton onClick={handleClick} isOpen={isOpen} />
      </div>

      <Burger onClick={handleClick} isOpen={isOpen} />

      <Carousel className="bg-primary mt-6">
        <Promo />
      </Carousel>
    </header>
  );
}

export default Header;
